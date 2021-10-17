import React from 'react';
import { useState } from 'react';

const SingupPage = ({authenticated, login}) => {

    const [form, setForm] = useState({
       milNum: "",
       password: "",
       passwordCheck: "",
       userName: ""
    });

    const onChangeHandler = e => {
		const nextForm = {
			...form,
			[e.target.name]: e.target.value
		};
		setForm(nextForm);
	};

    const submitSignup = () => {
        if(!(form.milNum && form.password && form.passwordCheck && form.userName)) {
            alert("입력란을 전부 작성하세요.");
            return ;
        }
        fetch("/board/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"milNum" : form.milNum,
				"password" : form.password,
                "passwordCheck": form.passwordCheck,
                "userName": form.userName
			})
		})
		.then((response) => response.json())
  		.then((data) => {
              console.log(data);
			  if(data.status === 'CREATED') {
                  alert("가입 완료");
				  window.location.href="/login";
			  } else {
                  alert(data.message);
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
                    }}>회원가입</h1>
                    <hr style={{
                        height: '3px',
                        width: '100%',
                        backgroundColor: '#333'
                    }}/>
                    <div style={{
                        fontSize: '20px',
                        textAlign: 'center',
                        marginBottom: '15px',
                    }}>아래정보를 입력해주세요</div>
                    <input type="text" style={{
                        fontSize: '20px',
                        border: '1px solid #d2d2d2',
                        textIndent: '5px',
                        width: '100%',
                        color: '#555',
                        verticalAlign: 'middle',
                        padding: '15px',
                        marginBottom: '10px'
                    }} placeholder="이름을 입력하세요."
                    value={form.userName} onChange={onChangeHandler} name="userName" required/>
                    <input type="text" style={{
                        fontSize: '20px',
                        border: '1px solid #d2d2d2',
                        textIndent: '5px',
                        width: '100%',
                        color: '#555',
                        verticalAlign: 'middle',
                        padding: '15px',
                        marginBottom: '10px'
                    }} placeholder="군번을 입력하세요."
                    value={form.milNum} onChange={onChangeHandler} name="milNum" required/>
                    <input type="password" style={{
                        fontSize: '20px',
                        border: '1px solid #d2d2d2',
                        textIndent: '5px',
                        width: '100%',
                        color: '#555',
                        verticalAlign: 'middle',
                        padding: '15px',
                        marginBottom: '10px'
                    }} placeholder="비밀번호를 입력하세요."
                    value={form.password} onChange={onChangeHandler} name="password" required/>
                    <input type="password" style={{
                        fontSize: '20px',
                        border: '1px solid #d2d2d2',
                        textIndent: '5px',
                        width: '100%',
                        color: '#555',
                        verticalAlign: 'middle',
                        padding: '15px',
                        marginBottom: '10px'
                    }} placeholder="위 비밀번호와 동일하게 입력하세요."
                    value={form.passwordCheck} onChange={onChangeHandler} name="passwordCheck" required/>
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
                    }} onClick={submitSignup}>확인</button>
                    <a style={{
                        fontSize: '18px',
                        textDecoration: 'none',
                        textAlign: 'center',
                        width: '100%',
                        display: 'block',
                        marginBottom: '20px',
                    }} href="login">로그인</a>
                    
                </div>
            </div>
        </div>
    );
}

export default SingupPage;