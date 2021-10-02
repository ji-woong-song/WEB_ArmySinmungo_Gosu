"""

Made by TheBreeze129 (H.W. Lee)

Analysis main.

"""

#import
import DBinfo
import clovainfo
import connectDB
import findsentiment
import keyword
import morphemeanalysis
import SQL

#exmaple
unit = 1234
branch_unit1 = '1'
branch_unit2 = '2'

#main

#DB open
conn, cursor = connectDB.connect_RDB(DBinfo.rds_host,DBinfo.rds_port,DBinfo.rds_username,DBinfo.rds_password,DBinfo.rds_dbname)


# #load content_board
# content_data = SQL.post_selection('free',cursor,unit,branch_unit1,branch_unit2)

#analysis_1 : posnegneu
# pos_num = 0
# neg_num = 0
# neu_num = 0
# for data in content_data:
#     title = data['title']
#     content = data['content']
#     contentlist = list()
#     for i in range(len(content)//1000):
#         contentlist.append(content[i*1000:(i+1)*1000])
#     contentlist.append(content[(len(content)//1000)*1000:])
#     title_pos_num, title_neg_num, title_neu_num = findsentiment.analysis_sentiment(findsentiment.get_sentiment(title))
#     for con in contentlist:
#         content_pos_num, content_neg_num, content_neu_num = findsentiment.analysis_sentiment(findsentiment.get_sentiment(content))
#         pos_num = pos_num + content_pos_num
#         neg_num = neg_num + content_neg_num
#         neu_num = neg_num + content_neg_num
#     pos_num = pos_num + title_pos_num
#     neg_num = neg_num + title_neg_num
#     neu_num = neu_num + title_neu_num
# all_num = pos_num + neg_num + neu_num
# pos_percent = pos_num/all_num*100
# neg_percent = neg_num/all_num*100
# neu_percent = neu_num/all_num*100


# #insert_1 : posnegneu
# SQL.analysis_posnegneu_insertion(conn,cursor,unit,branch_unit1,branch_unit2,pos_percent,neg_percent,neu_percent)


# #analysis_2 : keywordranking
# keytags = ['NNG','NNP','NP','VV']
# morphemescount = dict()
# rankdict = dict()
# for data in content_data:
#     title = data['title']
#     content = data['content']
#     datamorphemes, datamorphemescount = morphemeanalysis.pcs_morphemes(title+' '+content,keytags)
#     for i in datamorphemescount:
#         if i in morphemescount.keys():
#             morphemescount[i] = morphemescount[i] + datamorphemescount[i]
#         else:
#             morphemescount[i] = datamorphemescount[i]
# morphemescount = morphemeanalysis.reverse_dict(morphemescount)
  
# count = 0
# for key in sorted(morphemescount.keys(),reverse=True):
#     for values in morphemescount[key]:
#         count = count + 1
#         if count <= 10:
#             rankdict[count] = [values, key]
#         else:
#             break


# #insert_2 : keywordranking
# SQL.analysis_morphemerank_insertion(conn,cursor,unit,branch_unit1,branch_unit2,rankdict)
    

# #load keywords have to founded
# keywordfindlist = SQL.keyword_selection(cursor, unit, branch_unit1,branch_unit2)