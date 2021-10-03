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