"""

Made by TheBreeze129 (H.W. Lee)

For analysis sentiment in the text.

This part will use naver clova sentiment.

"""

#import modules and data
import requests
import sys
import json
import clovainfo

#get sentiment
def get_sentiment(content):
    url = clovainfo.url
    header = {'X-NCP-APIGW-API-KEY-ID': clovainfo.key_id,
            'X-NCP-APIGW-API-KEY' : clovainfo.key_pw,
            'Content-Type':'application/json'
            }
    data = {
            "content" : content
        }

    response = requests.post(url, data=json.dumps(data), headers=header)
    rescode = response.status_code
    if(rescode == 200):
        return response.json()
    else:
        return False

#analysis sentiment
def analysis_sentiment(response):
    neg_num = 0
    pos_num = 0
    neu_num = 0
    sentences = response['sentences']
    for sentence in sentences:
        if sentence['sentiment'] == 'positive':
            pos_num = pos_num + 1
        elif sentence['sentiment'] == 'negative':
            neg_num = neg_num + 1
        else:
            neu_num = neu_num + 1
    return pos_num, neg_num, neu_num

#example
example = """더불어민주당 대선 주자 선출을 위한 전북 경선에서 1위를 차지한 것으로 나타난 26일 저녁 이재명 경기도지사는 비슷한 시간대에 방송된 SBS 예능 '집사부일체'에도 등장해 국민들로부터 주목 받았다.

26일 저녁은 다른 대선 주자들을 지운 이재명 지사의 시간이 된 셈.

집사부일체는 최근 '대선주자 빅3' 특집을 편성, 지난 주 윤석열 전 검찰총장이 출연했고 이번 주는 이재명 지사가 출연했다. 다음 주에는 이낙연 전 더불어민주당 대표가 출연할 예정이다.

이 방송에서 이재명 지사는 가족 간 불화, 일명 '형수 욕설' 논란을 언급, 이날 방송 내용들 가운데서도 특히 시선이 쏠렸다.

해당 사안은 앞서 더불어민주당 대선 주자들의 토론회에서 경쟁자들의 공격 도구가 됐고, 황교익 씨가 과거 "이해 못 할 것은 아니다"라며 이재명 지사의 발언에 대해 두둔했다는 분석이 공교롭게도 그(황교익)가 경기관광공사 사장 내정 논란에 휩싸이면서 다시 화제가 되기도 했다.

이렇게 타인에 의해 계속 언급돼 온 것을, 이날 방송에서는 본인(이재명 지사) 입으로 먼저 말하면서, 논란의 배경을 해명하고 인간적인 소회도 덧붙이면서, 대선 행보에 계속 따라 붙고 있는 논란을 정면 돌파하는 시도를 했다는 평가다."""

response = get_sentiment(example)
pos_num, neg_num, neu_num = analysis_sentiment(response)
print(pos_num)
print(neg_num)
print(neu_num)




