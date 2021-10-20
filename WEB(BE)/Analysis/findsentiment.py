"""

Made by TheBreeze129 (H.W. Lee)

For analysis sentiment in the text.

This part will use naver clova sentiment.

"""

#import modules and data
import requests
import clovainfo
import json

# get sentiment

def get_sentiment(content):
    """
    find sentiment in sentence (use naver clova sentiment API)
    :param content: sentence
    """
    url = clovainfo.URL
    header = {'X-NCP-APIGW-API-KEY-ID': clovainfo.KEY_ID,
            'X-NCP-APIGW-API-KEY' : clovainfo.KEY_PW,
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
    """
    analysis pos, neg, neu in response.
    :param response: return of get_sentiment
    """
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




