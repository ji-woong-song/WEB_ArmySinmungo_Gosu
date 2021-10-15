# DB_INFO

RDS_HOST = "armysinmungo.cabw8bx503cg.ap-northeast-2.rds.amazonaws.com"
RDS_PORT = 3306
RDS_DBNAME = 'armysinmungo'
RDS_USERNAME = 'admin'
RDS_PASSWORD = 'hackathon'

def info_in():
    db_info = RDS_HOST,RDS_PORT,RDS_DBNAME,RDS_USERNAME,RDS_PASSWORD
    return db_info