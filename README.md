# 국방신문고 : Armysinmungo
![Logo](./logo.jpg)

<br>

## 프로젝트 소개
  &nbsp;&nbsp;이 프로젝트는 군 생활 중 장병들이 겪는 불편하거나 힘들었던 일, 고충 등 개선이 필요한 부분들을 소통하고, 해결방안을 제시할 수 있는 공간을 제공하며, 지휘관이 의견을 수렴해 조치 할 수 있도록 돕기 위해 기획되었습니다. 이 공간에 올라오는 글들을 데이터화 하여 중요한 문제를 발굴하고(육훈소 마스크, 성추행 등), 확인된 문제들을 지휘관이 확인하여 조치가 필요한 곳에 적절한 조치할 수 있도록 하며, 더 정확히 문제를 이해하여 효과적으로 문제를 해결하도록 돕습니다.<br><br>
 &nbsp;&nbsp;국방신문고는 이런 사람들에게 필요합니다.
 - 문제를 겪고있으나 보고에 벽이 느껴지는 장병
 - 중요한 문제를 알리고 개선하고자 하는 장병
 - 다른 중대,대대,부대 등과 소통하고 싶은 장병
 - 부대의 숨은 문제를 파악하고 해결하고자 하는 지휘관
 - 문제의 개선방안을 제안하고싶은 아이디어 넘치는 장병



## 기능 설명
### 개요
국방신문고는 문제해결을 돕기 위해 소통할 수 있는 게시판을 제공합니다. 그리고 게시되는 글들을 분석하여 제공함으로써 지휘관이 제기된 문제를 해결할 수 있도록 돕습니다.

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상

## 기술 스택 (Technique Used) 
### Server(back-end)
#### WebServer
 - Programming language : java
 - Framework : Spring
 - Deploy at Heroku

#### Analysis Server
 - Programming language : Python 3.8.6
 - Library used : Konlpy, 
 - API used : Naver Clova Sentiment
 - Deploy at

#### DB
 - DBMS : MySQL
 - Deploy at AWS RDS
 
### Front-end
 - Programming Language : java
 - Framework : React.js

## 설치 안내 (Installation Process)


#### backend : Analysis
```bash
$ git clone git주소
$ pip install pymysql
$ pip install urllib3
$ pip install six
$ pip install requests
```

## 프로젝트 사용법 (Getting Started)




## 팀 정보 (Team Information)
<table width="900">
    <thead>
        <tr>
            <th style="text-align:center" width="100">관등성명</th>
            <th style="text-align:center"  width="250">소개</th>
            <th width="150" style="text-align:center">Github</th>
            <th width="300" style="text-align:center">E-mail</th>
            <th width="100" style="text-align:center">역할</th>
        </tr> 
    </thead>
    <tbody>	
        <tr>
            <td width="100" align="center">김강년</td>
            <td width="250">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상명대학교<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;융합공과대학<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SW융합학부<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;컴퓨터과학전공</td>
            <td width="150" align="center">	
                <a href="https://github.com/pop7523">
                <img src="https://img.shields.io/badge/pop7523-655ced?style=social&logo=github"/>
                </a>
            </td>
            <td width="300" align="center">
                <a href=""><img src="https://img.shields.io/static/v1?label=&message=&color=lightblue&style=flat-square&logo=gmail"></a>
            </td>
            <td width="250" align="center">Team Leader</td>
        </tr>       
        <tr>
            <td width="100" align="center">이형우</td>
            <td width="250">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;경희대학교<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소프트웨여융합대학<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;컴퓨터공학과</td>
            <td width="150" align="center">	
                <a href="https://github.com/TheBreeze129">
                <img src="https://img.shields.io/badge/TheBreeze129-655ced?style=social&logo=github"/>
                </a>
            </td>
            <td width="300" align="center">
                <a href="lijiongyu0129@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=lijiongyu0129@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
            </td>
            <td width="250" align="center">Backend : Analysis, DB</td>
        </tr>        
        <tr>
            <td width="100" align="center">정성훈</td>
            <td width="250">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;경희대학교<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소프트웨어융합대학<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;컴퓨터공학과</td>
            <td width="150" align="center">	
                <a href="https://github.com/swa07016">
                <img src="https://img.shields.io/badge/swal07016-655ced?style=social&logo=github"/>
                </a>
            </td>
            <td width="300" align="center">
                <a href="swa07016@naver.com"><img src="https://img.shields.io/static/v1?label=&message=swa07016@naver.com&color=lightblue&style=flat-square&logo=naver"></a>
            </td>
            <td width="250" align="center">Backend : Webserver, DB</td>
        </tr>        
        <tr>
        <td width="100" align="center">송지웅</td>
        <td width="250">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;동국대학교<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;공과대학<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;컴퓨터공학전공</td>
        <td width="150" align="center">	
            <a href="https://github.com/shortboy7">
            <img src="https://img.shields.io/badge/shortboy7-655ced?style=social&logo=github"/>
            </a>
        </td>
        <td width="300" align="center">
        <a href="thdwldnd7@naver.com"><img src="https://img.shields.io/static/v1?label=&message=thdwldnd7@naver.com&color=lightblue&style=flat-square&logo=naver"></a>
        <td width="250" align="center">Frontend</td>
        </tr>
    </tbody>
</table>

	

## 저작권 및 사용권 정보 (Copyleft / End User License)

### Webserver
 * [apache-2.0]

### Analysis
 * [gpl-3.0+]

### Frontend
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)

### DB
 * []

This project is licensed under the terms of the MIT license.
