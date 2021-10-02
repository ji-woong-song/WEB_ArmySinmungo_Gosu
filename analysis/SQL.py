"""

Made by TheBreeze129 (H.W. Lee)

This python file have SQL lines.

"""

#import
from pymysql import NULL
import pymysql
import connectDB

#user_info
# id, birth, branch_unit1, branch_unit2, cellphone, discharge_date, enlist_date, mil_num, unit_code, user_pw, user_rank

#board_type
board_type = ["free","communicate","debate"]

#text load in post, return will be dict in list.
def post_selection(post_name, cursor, unit, branch_unit1, branch_unit2):
    sqlline = "SELECT board_"+post_name+"_post_id, title, content, user_info_id FROM board_"+post_name+"_post"
    cursor.execute(sqlline)
    data = cursor.fetchall()
    return data

#text load in comment, return will be dict in list.
def comment_selection(post_name, cursor):
    sqlline = "SELECT board_"+post_name+'_comment_id, content, user_info_id FROM board_'+post_name+'_comment'
    cursor.execute(sqlline)
    data = cursor.fetchall()
    return data

#load keywords user set
def keyword_selection(cursor, unit, branch_unit1, branch_unit2):
    try:
        sqlline = "SELECT * FROM analysis_attention_keywords WHERE unit_code="+str(unit)+" AND branch_unit1="+str(branch_unit1)+" AND branch_unit2="+str(branch_unit2)
        cursor.execute(sqlline)
        data = cursor.fetchall()
        keywordlist = list()
        for key in data[0].keys():
            if key.find("keyword") == 0 and data[0][key] != pymysql.NULL:
                keywordlist.append(data[0][key])
        return keywordlist
    except:
        return False

#insert analysis result into DB (keyword ranking(morphemeanalysis))
def analysis_morphemerank_insertion(conn, cursor, unit_code, branch_unit1, branch_unit2, keywordlist):
    sqlline = '''insert into analysis_keyword_all (unit_code, branch_unit1, branch_unit2, keyword_1, keyword_2, keyword_3, keyword_4, keyword_5, keyword_6, keyword_7, keyword_8, keyword_9, keyword_10) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'''
    cursor.execute(sqlline,(unit_code,branch_unit1,branch_unit2)+tuple(keywordlist))
    conn.commit()
    return True
#### 튜플로 가능하려나...? 확인필요

def analysis_posnegneu_insertion(conn, cursor, unit_code, branch_unit_1, branch_unit_2, pos, neg, neu):
    sqlline = '''insert into analysis_posnegneu (analysis_posnegneu_id, unit_code, branch_unit1, branch_unit2, postive_percent, negative_percent, neutral_percent) values (%s,%s,%s,%s,%s,%s,%s)'''
    cursor.execute(sqlline,('1', unit_code, branch_unit_1,branch_unit_2,pos,neg,neu))
    conn.commit()
    return True
