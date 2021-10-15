"""

Made by TheBreeze129 (H.W. Lee)

This python file have SQL lines.

"""

#user_info
# id, birth, branch_unit1, branch_unit2, cellphone, discharge_date, enlist_date, mil_num, unit_code, user_pw, user_rank

post_selection_sqlline = '''SELECT id, title, content FROM board_%s WHERE user_info_id =%s'''

comment_selection_sqlline = '''SELECT id, content FROM board_%s WHERE id =%s'''

attention_keyword_select_sqlline = '''SELECT * FROM analysis_attention_keywords WHERE unit_code=%s AND branch_unit1=%s AND branch_unit2=%s'''

keywordrank_insert_sqlline = '''INSERT INTO analysis_keyword_all (unit_code, branch_unit1, branch_unit2, keyword_1, keyword_2, keyword_3, keyword_4, keyword_5, keyword_6, keyword_7, keyword_8, keyword_9, keyword_10, num_1, num_2, num_3, num_4, num_5, num_6, num_7, num_8, num_9, num_10) 
                values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'''

keywordrank_update_sqlline = '''UPDATE analysis_keyword_all
                                SET keyword_1 = %s, keyword_2 = %s, keyword_3 = %s, keyword_4 = %s, keyword_5 = %s, keyword_6 = %s, keyword_7 = %s, keyword_8 = %s, keyword_9 = %s, keyword_10 = %s, num_1 = %s, num_2 = %s, num_3 = %s, num_4 = %s, num_5 = %s, num_6 = %s, num_7 = %s, num_8 = %s, num_9 = %s, num_10 = %s
                                WHERE unit_code = %s AND branch_unit1 = %s AND branch_unit2'''

posnegneu_insert_sqlline = '''INSERT INTO analysis_posnegneu (unit_code, branch_unit1, branch_unit2, postive_percent, negative_percent, neutral_percent) values (%s,%s,%s,%s,%s,%s)'''

posnegneu_update_sqlline = """UPDATE analysis_posnegneu
                            SET  postive_percent = %s, negative_percent = %s , neutral_percent = %s
                            WHERE unit_code = %s AND branch_unit1 = %s AND branch_unit2 = %s"""

detect_insert_sqlline = '''UPDATE analysis_attention_keywords 
                    SET num_%s = %s, link_id_%s = %s 
                    WHERE unit_code = %s AND branch_unit1 = %s AND branch_unit2 = %s'''

load_users_id_sqlline = 'SELECT id FROM user_info WHERE unit_code = %s'