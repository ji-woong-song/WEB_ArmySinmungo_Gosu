"""

Made by TheBreeze129 (H.W. Lee)

main.

"""


#import
from analysis import *
import DBinfo
import clovainfo
import connectDB
import SQL


#exmaple_variables
unit = 1234
branch_unit1 = '1'
branch_unit2 = '2'
board = 'free'
keytags = ['NNG','NNP','NP','VV']
content_data = [{'board_free_post_id' : 11111, 'title' : '삶이란 어떤 것일까.', 'content' : '나는 오늘 하루를 살아간다. 근데 왜 살아가는 것일가. 자살하는 것과 크게 다른 차이가 있는것일까?'},
                {'board_free_post_id' : 11122, 'title' : '죽을까 그냥', 'content' : '군생활이 끝이 안보인다. 걍 자살하는게 맞는걸까'}]


#main

#DB open
conn, cursor = connectDB.connect_RDB(DBinfo.rds_host,DBinfo.rds_port,DBinfo.rds_username,DBinfo.rds_password,DBinfo.rds_dbname)

# #load content_board
# content_data = SQL.post_selection(board,cursor,unit,branch_unit1,branch_unit2)

#load keywords have to founded
keywordfindlist = keyword_selection(cursor, unit, branch_unit1, branch_unit2)

#keyword_detect
keyworddetectiondict = detect_keyword(content_data, keywordfindlist, board)

#keyword_ranking
rankdict = rank_keywords(keytags, content_data)

#sentiment
pos_num, neg_num, neu_num = analysis_posnegneu(content_data)
all_num = pos_num + neg_num + neu_num
pos_percent = pos_num / all_num
neg_percent = neg_num / all_num
neu_percent = neu_num / all_num


#insertion
analysis_posnegneu_insertion(conn, cursor, unit, branch_unit1, branch_unit2, pos_percent, neg_percent, neu_percent)
analysis_keywordrank_insertion(conn,cursor, unit, branch_unit1,branch_unit2,rankdict)
print(keyworddetectiondict)