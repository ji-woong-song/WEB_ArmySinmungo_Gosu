"""
Made by TheBreeze129 (H.W. Lee)

For recognize given words.

"""

"""

to use this, maybe you have to do this.

python -m pip install urllib3
python -m pip install six
python -m pip install requests

"""

#import and alias
from konlpy.tag import Kkma
kkma = Kkma()

#pre-treat keywords
def pre_treat_keyword(keywords):
    treated_keyword = list()
    for word in keywords:
        treated_keyword.append(str(kkma.pos(word)[0][0]))
    return treated_keyword

#recognition
def recognition(sentences, keywords):
    morphemes = kkma.pos(sentences)
    print(morphemes)
    morphemeslist = list()
    recognizelist = list()
    recognize = False
    for set in morphemes:
        morpheme = set[0]
        if morpheme in keywords:
            recognizelist.append(str(set[0]))
            recognize = True
        morphemeslist.append(set[0])

    return recognizelist, recognize

# #example
# example = "너무 자살하고 싶다, 죽고싶어 진짜. 너무 힘들어"
# keywordset = ['자살', '힘들다', '죽다']
# treated_keywordset = pre_treat_keyword(keywordset)
# recongizelist, recognize= recognition(example, treated_keywordset)
# print(treated_keywordset)
# print(recongizelist)
# print(recognize)