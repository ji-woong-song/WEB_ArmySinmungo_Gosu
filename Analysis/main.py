"""

Made by TheBreeze129 (H.W. Lee)

main.

"""


#import
import os
import time
from pymysql import NULL
from analysis import *
import DBinfo
import connectDB


# main
def main(unit, branch_unit1, branch_unit2):
    #variables
    boardlist = ['free_post','communicate_comment','communicate_post','debate_comment','debate_theme','free_comment','letter_comment','letter_post']
    keywordnumlist = []
    keyworddetectiondict = {}
    numkeyworddict = {}
    rankdict = {}
    keytags = ['NNG','NNP','NP','VV']
    pos_num = 0
    neg_num = 0
    neu_num = 0
    COUNT = 0
    ANALYSIS = True


    #load keywords have to founded
    print("Keyworddetection Data Loading...")
    keywordfindlist = keyword_selection(cursor, unit, branch_unit1, branch_unit2)
    if keywordfindlist is False:
        print("Error : There is no data or Fail to load.")
    else:
        print("Success")
    #load users id in unit.
    cursor.execute(SQL.load_users_id_sqlline, unit)
    user_ids = []
    for user_id in cursor.fetchall():
        user_ids.append(user_id['id'])

    for user_id in user_ids:
        for board in boardlist:
            print("-"*20)
            print("Post, Comment Data Loading...")
            print("user_id :" + str(user_id))
            print("board : "+board)
            print("-"*20)
            content_data = post_selection(board,cursor,user_id)
            comment_data = comment_selection(board,cursor,user_id)
            if content_data is False and comment_data is False:
                print("Error : post and comment Not loaded")
                continue
            elif content_data is False:
                print("Error : Post Not loaded")
                content_data = comment_data
            elif comment_data is False:
                print("Error : Comment Not loaded")
            elif content_data==() and comment_data==():
                print("Success")
                print("There is no data in id : "+str(user_id)+", board : "+board)
                continue
            elif content_data==():
                print("Success")
                print("There is no post data in id : "+str(user_id)+", board : "+board)
                content_data = comment_data
            elif comment_data==():
                print("Success")
                print("There is no comment data in id : "+str(user_id)+", board : "+board)
            else:
                print("Success")
                content_data.append(comment_data)
            print("Analysis_keywordranking....")     
            localrankdict = rank_keywords(keytags, content_data)
            print("Success")
            print("Analysis_posnegneu....")
            lpos_num, lneg_num, lneu_num = analysis_posnegneu(content_data)
            print("Success")
            pos_num = pos_num + lpos_num
            neg_num = neg_num + lneg_num
            neu_num = neu_num + lneu_num
            keywordnumlist.append(localrankdict.values())  
            if keywordfindlist is not False:
                print("Analysis_keyworddetection....")
                detectdict = detect_keyword(content_data, keywordfindlist)
                if detectdict is False:
                    print("Success : Any keywords detected")
                    continue
                print("Success")
            for morpheme in detectdict:
                try:
                    keyworddetectiondict[morpheme][1] = keyworddetectiondict[morpheme][1] + detectdict[morpheme][1]
                    keyworddetectiondict[morpheme][2].append(detectdict[morpheme][2][0])
                except KeyError:
                    keyworddetectiondict[morpheme] = detectdict[morpheme]
            

    for kwsets in keywordnumlist:
        for kwset in kwsets:
            try:
                numkeyworddict[kwset[1]].append(kwset[0])
            except KeyError:
                numkeyworddict[kwset[1]] = [kwset[0]]

    for key in sorted(numkeyworddict.keys(),reverse=True):
        for values in numkeyworddict[key]:
            COUNT = COUNT + 1
            if COUNT <= 10:
                rankdict[COUNT] = [values, key]
            else:
                break

    if COUNT != 0:
        while COUNT <= 10:
            COUNT = COUNT + 1
            rankdict[COUNT] = [NULL, NULL]


        all_num = pos_num + neg_num + neu_num
        pos_percent = pos_num / all_num
        neg_percent = neg_num / all_num
        neu_percent = neu_num / all_num


        #insertion
        print("Insert at DB Start....")
        analysis_posnegneu_insertion(conn, cursor, unit, branch_unit1, branch_unit2, pos_percent, neg_percent, neu_percent)
        print("Success : analysis_posnegneu")
        analysis_keywordrank_insertion(conn,cursor, unit, branch_unit1,branch_unit2,rankdict)
        print("Success : keywordranking")
        analysis_detect_insertion(conn, cursor, unit, branch_unit1, branch_unit2, keyworddetectiondict, board)
        print("Success : keyworddetection")

    print("-"*20)


    return True

def clearConsole():
    command = 'clear'
    if os.name in ('nt', 'dos'):  # If Machine is running on Windows, use cls
        command = 'cls'
    os.system(command)

def SELECT_print_well(data):
    key = data[0].keys()
    strformat = ''
    for i in key:
        if len(str(data[0][i])) < 15 and len(str(i)) < 15 :
            strformat = strformat + '| %-15s'
        else:
            strformat = strformat + '| %-25s'
    strformat = strformat + "|"
    print(strformat % tuple(key))
    for dic in data:
        for a in dic.keys():
            if dic[a] == pymysql.NULL:
                dic[a] = 'NULL'
        print(strformat % tuple(dic.values()))

#Login Process
def login(LOGIN):
    login_ = LOGIN
    SUPERVISOR = ["test1","test1"]
    while login_:
        print("-"*20)
        print("LOGIN")
        print("-"*20)
        inputid = input("ID : ")
        inputpw = input("PW : ")
        print("-"*20)
        time.sleep(1)
        if inputid == SUPERVISOR[0] and inputpw == SUPERVISOR[1]:
            clearConsole()
            print("LOGIN SUCCESS")
            time.sleep(1)
            clearConsole()
            login_ = False
        else:
            clearConsole()
            print("LOGIN FAIL")
            time.sleep(1)
            clearConsole()
    return login_


#DB open
clearConsole()
print("Connecting Database...")
conn, cursor = connectDB.connect_RDB(DBinfo.info_in())
print("Success")
time.sleep(1)
clearConsole()
EXIT = False
LOGIN = True

while EXIT is False:
    LOGIN = login(LOGIN)
    print("-"*20)
    print("MENU")
    print("-"*20)
    print("1 : Analysis")
    print("2 : SEARCH UNIT_INFO")
    print("3 : Logout")
    print("4 : Exit")
    print("-"*20)
    select = input("press [1,2,3,4] or Enter : ")

    if select == '1':
        clearConsole()
        unit = int(input("Enter unit_code... : "))
        branch_unit1 = input("Enter branch_unit1... : ")
        branch_unit2 = input("Enter branch_unit2... : ")
        print("-"*20)
        print("UNIT_CODE="+str(unit)+", branch_unit1="+branch_unit1+", branch_unit2="+branch_unit2)
        print("Start...")
        print("-"*20)
        main(unit, branch_unit1, branch_unit2)
        print("Done")
        time.sleep(5)
        clearConsole()
    elif select == "2":
        clearConsole()
        print("-"*20)
        print("부대이름을 입력하십시오. 해당 부대 및 예하 부대의 부대번호 및 하위 부대번호를 검색합니다. EX) 5군단 / 5군단 5포병여단")
        search = str(input(" : "))
        cursor.execute("""select unit_code, branch_unit1, branch_unit2, unit_belong, unit_name from unit_info where unit_belong like '%"""+search+"""%'""")
        SELECT_print_well(cursor.fetchall())
        time.sleep(5)
        clearConsole()
    elif select == "3":
        clearConsole()
        print("Logout")
        LOGIN = True
        time.sleep(1)
        clearConsole()
        continue
    elif select == "4":
        clearConsole()
        exitselect = input("Program Exit? [Y/N] : ")
        if exitselect == 'Y':
            LOGIN = False
            EXIT = True
            conn.close()
            clearConsole()
            print("Program Exit...")
            break
        clearConsole()
    else:
        continue
