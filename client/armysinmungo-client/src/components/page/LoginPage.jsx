import React from 'react';
import { useState } from 'react';

const LoginPage = () => {

    const [form, setForm] = useState({
        milNum: '',
        password: ''
    });

    const onChangeHandler = e => {
		const nextForm = {
			...form,
			[e.target.name]: e.target.value
		};
		setForm(nextForm);
	};

    const submitLogin = () => {
        if(!(form.milNum && form.password)) {
            alert("입력란을 전부 작성하세요.");
            return ;
        }
        fetch("/board/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"milNum" : form.milNum,
				"password" : form.password
			})
		})
		.then((response) => response.json())
  		.then((data) => {
			  if(data.status === 'OK') {
				  const userInfo = data.data;
                  localStorage.setItem("userName", userInfo.userName);
                  localStorage.setItem("milNum", userInfo.milNum);
                  localStorage.setItem("rank", userInfo.rank);
                  localStorage.setItem("unitBelong", userInfo.unitBelong);
                  localStorage.setItem("unitName", userInfo.unitName);
				  window.location.href="/";
			  } else {
                  alert(data.message);
                  setForm({
                        milNum: "",
                        password: ''
                  })
              }
		  })

    }

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="row">
                <div className="col-md-4" style={{
                    width: '415px',
                    height: 'auto',
                    padding: '30px',
                    border:'1px solid #e8e8e8'
                }}>
                    <h1 className="text-center" style={{
                        fontSize: '34px',
                        color: 'black',
                    }}>로그인</h1>
                    <hr style={{
                        height: '3px',
                        width: '100%',
                        backgroundColor: '#333'
                    }}/>
                    <div style={{
                        fontSize: '20px',
                        textAlign: 'center',
                        marginBottom: '15px',
                    }}>군번 및 비밀번호를 입력해주세요</div>
                    <input type="text" style={{
                        fontSize: '20px',
                        border: '1px solid #d2d2d2',
                        textIndent: '5px',
                        width: '100%',
                        color: '#555',
                        verticalAlign: 'middle',
                        padding: '15px',
                        marginBottom: '10px'
                    }} placeholder="군번을 입력하세요." name="milNum"
                    value={form.milNum} onChange={onChangeHandler}/>
                    <input type="password" style={{
                        fontSize: '20px',
                        border: '1px solid #d2d2d2',
                        textIndent: '5px',
                        width: '100%',
                        color: '#555',
                        verticalAlign: 'middle',
                        padding: '15px',
                        marginBottom: '10px'
                    }} placeholder="비밀번호를 입력하세요." name="password"
                    value={form.password} onChange={onChangeHandler}/>
                    <button style={{
                        fontSize: '20px',
                        border: '0',
                        textIndent: '5px',
                        width: '100%',
                        verticalAlign: 'middle',
                        padding: '15px',
                        backgroundColor: '#318de7',
                        color: 'white',
                        marginBottom: '10px',
                    }} onClick={submitLogin}>로그인</button>
                    <a style={{
                        fontSize: '18px',
                        textDecoration: 'none',
                        textAlign: 'center',
                        width: '100%',
                        display: 'block',
                        marginBottom: '20px',
                    }} href="signup">회원가입</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;