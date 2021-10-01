"""
Made by TheBreeze129 (H.W.Lee)

For test konlpy

https://docs.google.com/spreadsheets/d/1OGAjUvalBuX-oZvZ_-9tEfYD2gQe7hTGsgUpiiBSXI8/edit#gid=0
"""

"""
to use this

python -m pip install urllib3
python -m pip install six
python -m pip install requests
"""

"""
idea
slice sentences to words using konlpy.
select adjective, verb, VCN and find positivity using naive bayes classifier.

"""


from konlpy.tag import Kkma
from konlpy.tag import Komoran
from konlpy.tag import Hannanum
from konlpy.tag import Twitter
from konlpy.tag import Mecab

example = u"지난 2012년 대선 당시 국정원이 이른바 '대선 댓글 사건'에 직접 개입한 것으로 드러났다. 이후 민주당은 이듬해 원세훈 전 원장을 서울중앙지검에 고발했다."

example2 = "IZ*ONE은 2018년 8월 31일 엠넷의 서바이벌 오디션 프로그램 프로듀스 48에서 선발되어 2018년 10월 29일에 데뷔한 한국-일본 합작 12인조 프로젝트 걸그룹이다. 그룹명 IZ*ONE은 12명의 소녀들이 하나가 되는 순간이라는 뜻이며, 영문으로 표기할 땐 IZ와 ONE 사이에 *(별표 기호)를 넣어 IZ*ONE으로 표기한다. 2021년 3월 14일 ONE, THE STORY 콘서트를 끝으로 모든 공식 활동을 종료하였고, 2021년 4월 29일 프로젝트 활동을 마무리하였다."

examplearticle = '''정부가 네이버·카카오 같은 플랫폼 기업을 규제한다 그래서 한동안 네이버 주가가 떨어졌어요. 개미들은 “그래도 영향력 있는 혁신기업인데 다시 오르겠지” 하면서 카카오는 1조원, 네이버는 5000억원 가까이 사들였는데요.
결론부터 말씀드리면 네이버·카카오 내년 3월 대선 때까지 약간 불안할 것 같긴 해요. 무슨 규제나 공약이 언제 어떤 방식으로 터져 나올지 알 수가 없거든요.
그런데 같은 플랫폼 기업이라도 카카오와 네이버 사이에 차이가 좀 있어 보여요. 우선 당장 규제당국의 집중 포화를 맞고 있는 건 카카오예요. 상장을 앞둔 카카오페이는 펀드나 대출, 보험 상품을 팔지 못하게 돼서 매출에 타격을 받을 수밖에 없고요. 반면 네이버페이는 결제 중심이고 대출이나 보험 관련 매출은 거의 없어서 상대적으로 피해가 덜해요.
금융 이외의 다른 분야를 봐도 네이버는 2017년 71개였던 계열사를 지난해 43개로 줄였어요. 그런데 카카오는 97개로 급증했죠. 그것도 택시, 대리운전, 꽃집, 미용실 같은 이른바 ‘골목상권 침해’로 볼 수 있는 분야들이에요.
일본과 동남아를 장악하고 있는 ‘라인’ 메신저가 네이버 거라는 거 아시죠? 이 라인이 최근 일본 최대 검색 엔진 야후재팬과 합쳐 Z홀딩스라는 회사로 거듭났어요. Z홀딩스 실적이 좋으면 네이버 실적도 좋아요. 글로벌 기업이 된 거예요.
여기에 네이버는 메타버스 플랫폼 ‘제페토’, 최근에 나이키매니아를 인수한 리셀 플랫폼 ‘크림’도 운영하고 있어요. 택시나 대리운전이 아니라 메타버스, 글로벌 이런 미래지향적인 분야에서 성과를 내고 있는 거예요.
네이버 카카오, 구글 페이스북 애플 같은 ‘빅테크’를 규제하는 것은 세계적인 추세예요. 규제 자체를 뭐라고 할 순 없지만 개인정보 보호를 강조하는 유럽연합이나 미국에 비해 우리나라에선 포털의 갑질, 횡포 이런 쪽을 집중적으로 보고 있어서 주가에 미칠 영향을 가늠하기가 더 힘들어요.
정리하면 규제가 네이버 주가를 단기적으로 출렁이게 하겠지만, 카카오보다는 상대적으로 상황이 나은 편이고, 네이버는 또 글로벌 신사업이 기대가 많이 된다, 요렇게 요약해 볼 수 있을 것 같아요. 그럼 오늘도 건강한 주식 맛집 앤츠랩으로 달려오세요. 안녕~'''

taggers = [ ('꼬꼬마', Kkma()), ('코모란', Komoran()), ('트위터', Twitter), ('한나눔', Hannanum())]
taggersko = [('코모란',Komoran())]

#############

"""
for name, tagger in taggersko:
    print('%s %s %s'%('-'*10,name,'-'*10))
    try:
        print(tagger.pos(example))
        
    except Exception as e:
        print(e)
"""

kkma = Kkma()

morphemes = list()
morphemesdict = dict()
morphemescount = dict()

parse = kkma.pos(examplearticle)

for morphemeset in parse:
    morphemesdict[morphemeset[0]] = morphemeset[1]
    morphemes.append(morphemeset[0])

for morpheme in morphemes:
    morphemescount[morpheme] = morphemes.count(morpheme)

print(morphemescount)

"""
AnalysisKomoran = Kkma().pos("좋다")
print(AnalysisKomoran[0])

### naive bayes classfier test.

tagging = ['NNG','VV','VA','VXV','UN', 'XR', 'MAG']
list_positive = ["좋", "기쁘", "반갑", "행복", "흐뭇하다", "즐겁다", "사랑스럽다",
 " 뿌듯하다", "눈물겹다", "황홀하다", "벅차다", "짜릿하다", "뭉클하다", "포근하다",
  "푸근하다", "시원하다", "통쾌하다", "감격하다"]
parse_list_pos = list()

for point, word in enumerate(list_positive):
    parse = Kkma().pos(word)[0]
    if parse[1] in tagging:
        parse_list_pos.append(parse[0])
    else:
        print(parse[1])

print(parse_list_pos)

list_negative = ["싫다"]
list_neutral = ["후련하다"]
"""
