"""
Made by TheBreeze129 (H.W. Lee)

For connect DB and function.

"""

"""

to use this, you have to do this

pip install pymysql

pip install pandas

sudo -i apt-get install libbz2-dev

pip install libbz2-dev

"""


#import
import sys
import os
import requests
import base64
import json
import pymysql
import csv

#input dbinfo using DBinfo.py
import DBinfo

#RDS info (AWS RDS)
rds_host, rds_port, rds_dbname, rds_username, rds_password = DBinfo.info_in()

#connecting rds
def connect_RDB(host, port, username, password, dbname):
    try:
        connection = pymysql.connect(host=host,user=username,passwd=password,db=dbname,port=port,use_unicode=True,charset='utf8')
        cursor = connection.cursor(pymysql.cursors.DictCursor)
    except:
        print("Error")
        exit()
    return connection, cursor

conn, cursor = connect_RDB(rds_host, rds_port, rds_username, rds_password, rds_dbname)



"""
sqlline = '''SELECT * FROM user_info'''

sqlline2 = "insert into user_info (id, birth, branch_unit1, branch_unit2, cellphone, discharge_date, enlist_date, mil_num, unit_code, user_pw, user_rank) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"


cursor.execute(sqlline2, ('45678', '2000-02-02','1','2','010-5678-1234','2019-09-10','2021-04-20','20-11111111','1234','test2','3'))
conn.commit()




cursor.execute(sqlline)
data = cursor.fetchall()
print(data)
    """



