"""
Made by TheBreeze129 (H.W. Lee)

For parse sentences to morphenes and analysis it

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

# reverse dict
def reverse_dict(indict):
    revdict = dict()
    nums = set()
    for num in indict.values():
        nums.add(num)
    sorted(nums)
    for i in nums:
        key = list()
        for l in indict:
            if indict[l] == i:
                key.append(l)
        revdict[i] = key
    return revdict


# parse sentences to morphemes, save morphemes type, count morphemes that not listed in exception
def pcs_morphemes(sentences, keytag):
    morphemes = list()
    morphemescount = dict()

    parse = kkma.pos(sentences)
    for morphemeset in parse:
        if morphemeset[1] in keytag:
            if morphemeset[1] == 'VV':
                morphemes.append(morphemeset[0]+'다')
            else:
                morphemes.append(morphemeset[0])
    for morpheme in morphemes:
        morphemescount[morpheme] = morphemes.count(morpheme)

    return morphemes, morphemescount