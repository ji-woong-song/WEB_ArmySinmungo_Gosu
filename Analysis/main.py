"""

Made by TheBreeze129 (H.W. Lee)

main.

"""


#import
from analysis import *
import DBinfo
import connectDB


#exmaple_variables
unit = 1234
branch_unit1 = '1'
branch_unit2 = '2'

content_data = [{'board_free_post_id' : 11111, 'title' : '삶이란 어떤 것일까.', 'content' : '나는 오늘 하루를 살아간다. 근데 왜 살아가는 것일가. 자살하는 것과 크게 다른 차이가 있는것일까?'},
                {'board_free_post_id' : 11122, 'title' : '죽을까 그냥', 'content' : '군생활이 끝이 안보인다. 걍 자살하는게 맞는걸까'}]



#main

#variables
boardlist = ['free_post']
keywordnumlist = list()
keyworddetectiondict = dict()
numkeyworddict = dict()
rankdict = dict()
keytags = ['NNG','NNP','NP','VV']
pos_num = 0
neg_num = 0
neu_num = 0

#DB open
conn, cursor = connectDB.connect_RDB(DBinfo.info_in())

#load keywords have to founded
keywordfindlist = keyword_selection(cursor, unit, branch_unit1, branch_unit2)

#load users id in unit.
cursor.execute(SQL.load_users_id_sqlline, unit)
user_ids = list()
for id in cursor.fetchall():
    user_ids.append(id['id'])

for id in user_ids:
    for board in boardlist:
        content_data = post_selection(board,cursor,id)
        detectdict = detect_keyword(content_data, keywordfindlist, board)
        localrankdict = rank_keywords(keytags, content_data)
        lpos_num, lneg_num, lneu_num = analysis_posnegneu(content_data)
        for morpheme in detectdict:
            try:
                keyworddetectiondict[morpheme][1] = keyworddetectiondict[morpheme][1] + detectdict[morpheme][1]
                keyworddetectiondict[morpheme][2].append(detectdict[morpheme][2][0])
            except:
                keyworddetectiondict[morpheme] = detectdict[morpheme]
        pos_num = pos_num + lpos_num
        neg_num = neg_num + lneg_num
        neu_num = neu_num + lneu_num
        keywordnumlist.append(localrankdict.values())

for sets in keywordnumlist:
    for set in sets:
        try:
            numkeyworddict[set[1]].append(set[0])
        except:
            numkeyworddict[set[1]] = [set[0]]

    count = 0
for key in sorted(numkeyworddict.keys(),reverse=True):
    for values in numkeyworddict[key]:
        count = count + 1
        if count <= 10:
            rankdict[count] = [values, key]
        else:
            break

all_num = pos_num + neg_num + neu_num
pos_percent = pos_num / all_num
neg_percent = neg_num / all_num
neu_percent = neu_num / all_num


#insertion
analysis_posnegneu_insertion(conn, cursor, unit, branch_unit1, branch_unit2, pos_percent, neg_percent, neu_percent)
analysis_keywordrank_insertion(conn,cursor, unit, branch_unit1,branch_unit2,rankdict)
analysis_detect_insertion(conn, cursor, unit, branch_unit1, branch_unit2, keyworddetectiondict, board)