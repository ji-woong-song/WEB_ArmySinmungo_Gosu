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




