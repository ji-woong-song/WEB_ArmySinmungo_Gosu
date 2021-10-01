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
branch_unit1 = 1
branch_unit2 = 2

#main

#DB open
conn, cursor = connectDB.connect_RDB(DBinfo.rds_host,DBinfo.rds_port,DBinfo.rds_username,DBinfo.rds_password,DBinfo.rds_dbname)

#load keywords have to founded
keywordfindlist = SQL.keyword_selection(cursor, unit, branch_unit1,branch_unit2)

#load content_board
