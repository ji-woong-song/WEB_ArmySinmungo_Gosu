"""
Made by TheBreeze129 (H.W. Lee)

For connect DB and function.

"""

"""

to use this, you have to do this

pip install pymysql

pip install pandas
pip install _bz2

"""


#import
import sys
import os
import requests
import base64
import json
import logging
import time
import pymysql
import psycopg2 as pg2
import csv

#RDS info (AWS RDS)
rds_host = "http://armysinmungo.cabw8bx503cg.ap-northeast-2.rds.amazonaws.com/"
rds_port = 3306
rds_dbname = 'armysinmungo'
rds_username = 'admin'
rds_password = 'hackathon'

#connecting rds
def connect_RDS(host, port, username, password, dbname):
    try:
        connection = pg2.connect(database=dbname,host=host,port=port,user=username,password=password)
        cursor = connection.cursor
        print("Success")
    except:
        print("Fail")
        exit()
    return connection, cursor

def connect_RDS1(host, port, username, password, dbname):
    try:
        connection = pymysql.connect(host=host, user = username, passwd=password,db=dbname,port=port,use_unicode=True,charset='utf8')
        cursor = connection.cursor
        print("Success1")
    except:
        print("Fail1")
        exit()
    return connection, cursor

dbconn, cursor = connect_RDS(rds_host,rds_port,rds_username,rds_password,rds_dbname)

