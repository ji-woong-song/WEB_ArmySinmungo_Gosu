"""
Made by TheBreeze129 (H.W. Lee)

For recognize given words.

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
    """
    to parse keyword(set by user)
    :param keywords: list of keyword
    """
    treated_keyword = list()
    for word in keywords:
        treated_keyword.append([word[0],str(kkma.pos(word[1])[0][0])])
    return treated_keyword

#recognition
def recognition(sentences, keywordset, id):
    """
    to detect(recongize) keyword in sentence.
    :param sentences: sentences
    :param keywordset: keywords
    :param id: 
    """
    keywords = []
    for i in keywordset:
        keywords.append(i[1])
    morphemes = kkma.pos(sentences)
    recognizedict = {}
    recognize = False
    for mpset in morphemes:
        morpheme = mpset[0]
        if morpheme in keywords:
            for i in keywordset:
                if i[1]==morpheme:
                    key = i
            try:
                recognizedict[key[0]][1] = recognizedict[i] + 1
                recognizedict[key[0]][2].append(id)
            except:
                recognizedict[key[0]] = [key[1], 1,[id]]
            recognize = True
    return recognizedict, recognize
