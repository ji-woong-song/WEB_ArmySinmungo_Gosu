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
    morphemesdict = dict()
    morphemescount = dict()

    parse = kkma.pos(sentences)
    for morphemeset in parse:
        if morphemeset[1] in keytag:
            if morphemeset[1] == 'VV':
                morphemes.append(morphemeset[0]+'다')
                morphemesdict[morphemeset[0]+'다'] = morphemeset[1]
            else:
                morphemes.append(morphemeset[0])
                morphemesdict[morphemeset[0]] = morphemeset[1]
    for morpheme in morphemes:
        morphemescount[morpheme] = morphemes.count(morpheme)
    morphemescount = reverse_dict(morphemescount)

    return morphemes, morphemescount, morphemesdict

print(kkma.pos("66개"))


#exampletest
example = '''정부가 네이버·카카오 같은 플랫폼 기업을 규제한다 그래서 한동안 네이버 주가가 떨어졌어요. 개미들은 “그래도 영향력 있는 혁신기업인데 다시 오르겠지” 하면서 카카오는 1조원, 네이버는 5000억원 가까이 사들였는데요.
결론부터 말씀드리면 네이버·카카오 내년 3월 대선 때까지 약간 불안할 것 같긴 해요. 무슨 규제나 공약이 언제 어떤 방식으로 터져 나올지 알 수가 없거든요.
그런데 같은 플랫폼 기업이라도 카카오와 네이버 사이에 차이가 좀 있어 보여요. 우선 당장 규제당국의 집중 포화를 맞고 있는 건 카카오예요. 상장을 앞둔 카카오페이는 펀드나 대출, 보험 상품을 팔지 못하게 돼서 매출에 타격을 받을 수밖에 없고요. 반면 네이버페이는 결제 중심이고 대출이나 보험 관련 매출은 거의 없어서 상대적으로 피해가 덜해요.
금융 이외의 다른 분야를 봐도 네이버는 2017년 71개였던 계열사를 지난해 43개로 줄였어요. 그런데 카카오는 97개로 급증했죠. 그것도 택시, 대리운전, 꽃집, 미용실 같은 이른바 ‘골목상권 침해’로 볼 수 있는 분야들이에요.
일본과 동남아를 장악하고 있는 ‘라인’ 메신저가 네이버 거라는 거 아시죠? 이 라인이 최근 일본 최대 검색 엔진 야후재팬과 합쳐 Z홀딩스라는 회사로 거듭났어요. Z홀딩스 실적이 좋으면 네이버 실적도 좋아요. 글로벌 기업이 된 거예요.
여기에 네이버는 메타버스 플랫폼 ‘제페토’, 최근에 나이키매니아를 인수한 리셀 플랫폼 ‘크림’도 운영하고 있어요. 택시나 대리운전이 아니라 메타버스, 글로벌 이런 미래지향적인 분야에서 성과를 내고 있는 거예요.
네이버 카카오, 구글 페이스북 애플 같은 ‘빅테크’를 규제하는 것은 세계적인 추세예요. 규제 자체를 뭐라고 할 순 없지만 개인정보 보호를 강조하는 유럽연합이나 미국에 비해 우리나라에선 포털의 갑질, 횡포 이런 쪽을 집중적으로 보고 있어서 주가에 미칠 영향을 가늠하기가 더 힘들어요.
정리하면 규제가 네이버 주가를 단기적으로 출렁이게 하겠지만, 카카오보다는 상대적으로 상황이 나은 편이고, 네이버는 또 글로벌 신사업이 기대가 많이 된다, 요렇게 요약해 볼 수 있을 것 같아요. 그럼 오늘도 건강한 주식 맛집 앤츠랩으로 달려오세요. 안녕~'''
keytags = ['NNG','NNP','NP','VV']git
morphemes, morphemescount, morphemesdict = pcs_morphemes(example, keytags)
print(morphemescount.keys())