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
def post_selection(post_name, cursor, user_info_id):
    sqlline = "SELECT board_"+post_name+"_post_id, title, content, user_info_id FROM board_"+post_name+"_post WHERE user_info_id ="+user_info_id
    cursor.execute(sqlline)
    data = cursor.fetchall()
    return data

#text load in comment, return will be dict in list.
def comment_selection(post_name, cursor):
    sqlline = "SELECT board_"+post_name+'_comment_id, content, user_info_id FROM board_'+post_name+'_comment'
    cursor.execute(sqlline)
    data = cursor.fetchall()
    return data

attention_keyword_select_sqlline = "SELECT * FROM analysis_attention_keywords WHERE unit_code=%s AND branch_unit1=%s AND branch_unit2=%s"

keywordrank_insert_sqlline = '''insert into analysis_keyword_all (unit_code, branch_unit1, branch_unit2, keyword_1, keyword_2, keyword_3, keyword_4, keyword_5, keyword_6, keyword_7, keyword_8, keyword_9, keyword_10, num_1, num_2, num_3, num_4, num_5, num_6, num_7, num_8, num_9, num_10) 
                values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'''

posnegneu_insert_sqlline = '''insert into analysis_posnegneu (unit_code, branch_unit1, branch_unit2, postive_percent, negative_percent, neutral_percent) values (%s,%s,%s,%s,%s,%s)'''

detect_insert_sqlline = '''UPDATE analysis_attention_keywords 
                    SET num_%s = %s, link_id_%s = %s 
                    WHERE unit_code = %s AND branch_unit1 = %s AND branch_unit2 = %s'''

load_users_id_sqlline = 'SELECT id FROM user_info WHERE unit_code = %s'