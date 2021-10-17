import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router';

const LoginPage = ({authenticated, login}) => {

    const [form, setForm] = useState({
        userId: '',
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
        const { userId, password } = form;
        try {
            login({userId, password});
            window.location.href="/";
        } catch(e) {
            alert("군번 또는 비밀번호가 일치하지 않습니다.");
            setForm({
                userId: '',
                password: ''
            })
        }
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
                    }} placeholder="군번을 입력하세요." name="userId"
                    value={form.userId} onChange={onChangeHandler} required/>
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
                    value={form.password} onChange={onChangeHandler} required/>
                    <input type="password" style={{
                        fontSize: '20px',
                        border: '1px solid #d2d2d2',
                        textIndent: '5px',
                        width: '100%',
                        color: '#555',
                        verticalAlign: 'middle',
                        padding: '15px',
                        marginBottom: '10px'
                    }} placeholder="위 비밀번호와 동일하게 입력하세요." name="password"
                    value={form.password} onChange={onChangeHandler} required/>
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
                    }} onClick={submitLogin}>확인</button>
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

export default LoginPage;