import { useState, useEffect } from 'react'
import { Navigation } from '../navigation'
import Footer from '../Footer';

const CommunicateWritePage = () => {

	const [form, setForm] = useState({
		title: '',
		content: '',
		tagged: '',
		category: '',
	});

	// onChange handler
	const onChangeHandler = e => {
		const nextForm = {
			...form,
			[e.target.name]: e.target.value
		};
		setForm(nextForm);
	};

	const submitPost = () =>{ 
		if(!(form.title && form.content && form.tagged && form.category)) {
            alert("입력란을 전부 작성하세요.");
            return ;
        }
		fetch("/board/communicate/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"title" : form.title,
				"content" : form.content,
				"tagged" : form.tagged,
				"category" : form.category,
				"milNum": localStorage.getItem("milNum")
			})
		})
		.then((response) => response.json())
  		.then((data) => {
			  if(data.status === 'CREATED') {
				  alert("등록 완료");
				  window.location.href="/communicate";
			  }
		  });
	}
	
	return (
		<div>
			<base href="/" />
			<Navigation/>
			<div style={{
					width: '100%',
					height: '400px',
					backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/04/15/06/13/beach-4128541_960_720.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					textAlign: 'center',
				}}>
				<div style={{
					height: '100%',
					display: 'inline-block',
					paddingTop: '200px',
					textAlign: 'center',
					fontWeight: '100',
					fontSize: '70px',
					color: 'rgb(59, 78, 50)'
					}}>소통하기 / 글쓰기</div>
			</div>
			<div className="container" style={{
					paddingTop:'50px',
				}}>
				
				<div className="row" style={{
					backgroundColor: '#f4f6f7',
					width: '100%',
					padding: '3rem 3rem',
					marginLeft: '0',
					display: 'flex'
				}}>
					<div style={{ 
						margin: '0 auto',
						fontSize: '20px',
					 }}>
					함께 이야기하고 싶은 공공문제에 대한 여러분의 생각을 적어주세요!
					</div>
				</div>
				
				
				<div className="row" style={{
					backgroundColor: '#f4f6f7',
					width: '100%',
					padding: '3rem 3rem',
					marginLeft: '0',

					marginTop: '30px',
				}}>
					<input className="form-control" placeholder="제목을 입력해주세요. (100자 이하)" 
					style={{
						fontSize: '20px', 
						padding: '25px',
						width: '45%',
						display: 'inline-block',
					}} value={form.title} onChange={onChangeHandler} name="title"/>

					<input className="form-control" placeholder="태그를 입력해주세요." 
					style={{
						fontSize: '20px', 
						padding: '25px',
						width: '22.5%',
						display: 'inline-block',
						float: 'right'
					}} value={form.tagged} onChange={onChangeHandler} name="tagged"/>

					<select className="form-control" style={{
						display: 'inline-block',
						fontSize: '20px',
						height: '52px',
						width: '22.5%',
						verticalAlign: '-11px',
						float: 'right',
						marginRight: '53px',
					}} value={form.category} onChange={onChangeHandler} name="category">
						<option value="선택" selected="selected">선택</option>
						<option value="군수">군수</option>
						<option value="작전">작전</option>
						<option value="정보">정보</option>
						<option value="병영생활">병영생활</option>
						<option value="기타">기타</option>
					</select>

					<textarea className="form-control" placeholder="내용을 입력해주세요. (500자 이하)"
					style={{
						fontSize: '20px',
						padding: '25px',
						display: 'block',
						marginTop: '20px'
					}} rows="12" value={form.content} onChange={onChangeHandler} name="content"/>

					<hr style={{
						width: '100%',
						backgroundColor: 'gray',
						opacity: '0.6',
					}}/>

					<button className="btn btn-secondary" style={{
						float: 'right',
						fontSize: '20px',
						borderRadius: '30px',
						backgroundColor : 'gray',
						border: '0',
						color: 'white',
						padding: '10px 20px',
						marginLeft: '10px'
					}} onClick={()=>window.location.href="/communicate"}>취소</button>

					<button className="btn btn-primary" style={{
						float: 'right',
						fontSize: '20px',
						borderRadius: '30px',
						border: '0',
						padding: '10px 20px'
					}} onClick={submitPost}>등록</button>

				</div>


				<div className="row" style={{
					marginTop: '20px',
					marginBottom: '20px',
				}}>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default CommunicateWritePage;