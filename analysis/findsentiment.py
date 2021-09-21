"""

Made by TheBreeze129 (H.W. Lee)

For analysis sentiment in the text.

This part will use naver clova sentiment.

"""


import requests

url = "https://naveropenapi.apigw.ntruss.com/sentiment-analysis/v1/analyze"

header = {'X-NCP-APIGW-API-KEY-ID':'ymydhcvipo',
        'X-NCP-APIGW-API-KEY' : 'BZFREXShaW0SyoFdWO35UTev6NBPRLM0VoyjIGdE',
        'Content-Type':'application/json'
        }

data = {'content' : '아 진짜 너무 빡치는거 아니냐 쟤 왜저럴까 진짜'}

print('Hi')
req = requests.post(url,headers=header, data=data)



print(req.content)
