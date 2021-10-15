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

import pymysql

#connecting rds
def connect_RDB(line):
    host, port, dbname, username, password = line[0], line[1], line[2], line[3], line[4]
    try:
        connection = pymysql.connect(host=host,port=port,db=dbname,user=username,passwd=password,use_unicode=True,charset='utf8')
        cursor = connection.cursor(pymysql.cursors.DictCursor)
    except Exception as ex:
        print("Error at connecting_RDB : "+ex)
        cursor = False
        connection = False
    return connection, cursor