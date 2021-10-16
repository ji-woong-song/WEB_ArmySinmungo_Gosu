"""

Made by TheBreeze129 (H.W. Lee)

Analysis.

"""

#import
import findsentiment
import Keyword
import morphemeanalysis
import SQL
import pymysql

#analysis_1 : posnegneu
def analysis_posnegneu(content_data):
    pos_num = 0
    neg_num = 0
    neu_num = 0
    for data in content_data:
        try:
            title = data['title']
            content = data['content']
        except Exception:
            content = data['content']
        contentlist = list()
        for i in range(len(content)//1000):
            contentlist.append(content[i*1000:(i+1)*1000])
        contentlist.append(content[(len(content)//1000)*1000:])
        title_pos_num, title_neg_num, title_neu_num = findsentiment.analysis_sentiment(findsentiment.get_sentiment(title))
        for con in contentlist:
            content_pos_num, content_neg_num, content_neu_num = findsentiment.analysis_sentiment(findsentiment.get_sentiment(con))
            pos_num = pos_num + content_pos_num
            neg_num = neg_num + content_neg_num
            neu_num = neg_num + content_neu_num
        pos_num = pos_num + title_pos_num
        neg_num = neg_num + title_neg_num
        neu_num = neu_num + title_neu_num
    return pos_num, neg_num, neu_num


#insert_1 : posnegneu
def analysis_posnegneu_insertion(conn, cursor, unit_code, branch_unit_1, branch_unit_2, pos, neg, neu):
    try:
        cursor.execute(SQL.posnegneu_insert_sqlline,(unit_code, branch_unit_1,branch_unit_2,pos,neg,neu))
        conn.commit()
    except Exception:
        cursor.execute(SQL.posnegneu_update_sqlline,(pos, neg, neu, unit_code, branch_unit_1, branch_unit_2))
        conn.commit()
    return True


#analysis_2 : keywordranking
def rank_keywords(keytags, content_data):
    morphemescount = dict()
    rankdict = dict()
    for data in content_data:
        try:
            title = data['title']
            content = data['content']
        except KeyError:
            content = data['content']
        datamorphemes, datamorphemescount = morphemeanalysis.pcs_morphemes(title+' '+content,keytags)
        for i in datamorphemescount:
            if i in morphemescount.keys():
                morphemescount[i] = morphemescount[i] + datamorphemescount[i]
            else:
                morphemescount[i] = datamorphemescount[i]
    morphemescount = morphemeanalysis.reverse_dict(morphemescount)
    
    count = 0
    for key in sorted(morphemescount.keys(),reverse=True):
        for values in morphemescount[key]:
            count = count + 1
            if count <= 10:
                rankdict[count] = [values, key]
            else:
                break
    return rankdict


#insert_2 : keywordranking
def analysis_keywordrank_insertion(conn, cursor, unit_code, branch_unit1, branch_unit2, keyworddict):
    try:
        cursor.execute(SQL.keywordrank_update_sqlline(keyworddict[1][0],keyworddict[2][0],keyworddict[3][0],keyworddict[4][0],keyworddict[5][0],keyworddict[6][0],keyworddict[7][0],keyworddict[8][0],keyworddict[9][0],keyworddict[10][0],
                    keyworddict[1][1],keyworddict[2][1],keyworddict[3][1],keyworddict[4][1],keyworddict[5][1],keyworddict[6][1],keyworddict[7][1],keyworddict[8][1],keyworddict[9][1],keyworddict[10][1],
                    unit_code,branch_unit1,branch_unit2))
        conn.commit()
    except Exception:
        cursor.execute(SQL.keywordrank_insert_sqlline, (unit_code,branch_unit1,branch_unit2,
                    keyworddict[1][0],keyworddict[2][0],keyworddict[3][0],keyworddict[4][0],keyworddict[5][0],keyworddict[6][0],keyworddict[7][0],keyworddict[8][0],keyworddict[9][0],keyworddict[10][0],
                    keyworddict[1][1],keyworddict[2][1],keyworddict[3][1],keyworddict[4][1],keyworddict[5][1],keyworddict[6][1],keyworddict[7][1],keyworddict[8][1],keyworddict[9][1],keyworddict[10][1]))
        conn.commit()
    return True

#select_1 : attention keyword(will be used in keyword detection)
def keyword_selection(cursor, unit, branch_unit1, branch_unit2):
    try:
        cursor.execute(SQL.attention_keyword_select_sqlline, (unit, branch_unit1, branch_unit2))
        data = cursor.fetchall()
        keywordlist = list()
        for key in data[0].keys():
            if key.find("keyword") == 0 and data[0][key] != pymysql.NULL:
                keywordlist.append([key,data[0][key]])
        return keywordlist
    except Exception:
        return False

#analysis_3 : keyword detection
def detect_keyword(content_data, keywordfindlist):
    treatkeywordfindlist = Keyword.pre_treat_keyword(keywordfindlist)
    keyworddetectiondict = {}
    for data in content_data:
        try:
            title = data['title']
            content = data['content']
        except KeyError:
            content = data['content']
        id = data['id']
        detectdict, detect = Keyword.recognition(title+' '+content, treatkeywordfindlist, id)
        if detect == False:
            continue
        for morpheme in detectdict:
            try:
                keyworddetectiondict[morpheme][1] = keyworddetectiondict[morpheme][1] + detectdict[morpheme][1]
                keyworddetectiondict[morpheme][2].append(detectdict[morpheme][2][0])
            except KeyError:
                keyworddetectiondict[morpheme] = detectdict[morpheme]
    return keyworddetectiondict


#insertion_3 : keyword detection
def analysis_detect_insertion(conn, cursor, unit, branch_unit1, branch_unit2, keyworddetectiondict, board):
    for key in keyworddetectiondict:
        keynum = int(key.split('_')[1])
        linkline = ''
        for link in keyworddetectiondict[key][2][:-1]:
            linkline = linkline + board + '_' + str(link) + '/'
        linkline = linkline + board + '_' + str(keyworddetectiondict[key][2][-1])
        cursor.execute(SQL.detect_insert_sqlline, (keynum, keyworddetectiondict[key][1], keynum, linkline, unit, branch_unit1, branch_unit2))
        conn.commit()
    return True

#text load in post or comment, return will be dict in list.
def post_selection(post_name, cursor, user_info_id):
    try:
        cursor.execute(SQL.post_selection_sqlline %(str(post_name), user_info_id))
        data = cursor.fetchall()
    except:
        data = False
    return data

    #have to be recodded

def comment_selection(board_name, cursor, user_info_id):
    try:
        cursor.execute(SQL.comment_selection_sqlline %(str(board_name), user_info_id))
        data = cursor.fetchall()
    except:
        data = False
    return data