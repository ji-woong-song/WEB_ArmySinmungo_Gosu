import { useState, useEffect } from 'react'
import { Navigation } from '../navigation'
import Footer from '../Footer';
import Comment from '../Comment';
import qs from 'qs';
import Spinner from '../Spinner';


const CommunicatePostPage = (props) => {
    // query 파라미터
	const query = qs.parse(props.location.search, {
        ignoreQueryPrefix: true
      });
	const postId = query.id;

	const [commentSpinner, setCommentSpinner] = useState(false);
	const [postSpinner, setPostSpinner] = useState(false);

	const [commentList, setCommentList] = useState([]);
	const [post, setPost] = useState({});
	const [uploadDate, setUploadDate] = useState('');
	const [form, setForm] = useState({
		mension: 0,
		content: '',
		id: postId
	});

	const getData = () => { 
		setPostSpinner(true);
		fetch(`/board/communicate/post/${postId}`)
		.then((response) => response.json())
		  .then((data) => {
				setPost(data.data); 
			  const date = new Date(data.data.uploadTime);
			  setUploadDate(date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate());
			  setPostSpinner(false);
		});
	}
	
	const getCommentList = () => {
		setCommentSpinner(true);
		fetch(`/board/communicate/comment/${postId}`)
		.then((response) => response.json())
		  .then((data) => {
			   setCommentList(data.data);
			   setCommentSpinner(false);
			});
	}

	const submitComment = () => {
		if(!(form.content)) {
            alert("입력란을 전부 작성하세요.");
            return ;
        }
		fetch("/board/communicate/comment", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
				'Accept': 'application/json, text/plain',
			},
			body: JSON.stringify({
				"mension" : form.mension,
				"content" : form.content,
				"id" : form.id,
				"milNum": localStorage.getItem("milNum")
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data.status==='CREATED') {
				setForm({
					...form,
					content: ''
				});
				alert('등록완료');
				getCommentList();
			}
		});
	}
	
	const onChangeHandler = e => {
		const nextForm = {
			...form,
			[e.target.name]: e.target.value
		};
		setForm(nextForm);
	};


	useEffect(() => {
		getData();
		getCommentList();
	}, []);

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
					}}>소통하기 / 글</div>
			</div>
			<div className="container" style={{
					paddingTop:'50px',
				}}>
				
				
				<div>
                        {postSpinner && <Spinner/>}
                    </div>

                <div className="row">
                    <span style={{
                        display: 'inline-block',
                        fontSize: '20px',
                        backgroundColor: '#7662e0',
                        color: 'white',
                        borderRadius: '11px',
                        padding: '6px 11px',
                    }}>{post.tagged}</span>
                    <span style={{
						 display: 'inline-block',
						 fontSize: '20px',
						 backgroundColor: 'white',
						 color: 'black',
						 border: '1px solid gray',
						 borderRadius: '11px',
						 padding: '6px 11px',
						 marginLeft: '10px'
					}}>{post.category}</span>
                </div>
				
				
				<div className="row">
					<h1 style={{
						color: 'black'
					}}>{post.title}</h1>
				</div>


				<div className="row" style={{
					padding: '25px 40px',
					border: '1px solid #ddd',
					marginTop: '10px'
				}}>
					<span style={{fontSize: '19px'}}><span style={{color: 'black'}}>{post.userName}</span> 님의 글</span>
					<span style={{fontSize: '19px'}}> &nbsp;|&nbsp; <span>{uploadDate}</span></span>
					<span style={{fontSize: '19px'}}> &nbsp;|&nbsp; 댓글 : <span>{commentList ? commentList.length : 0}</span></span>
				</div>
				
				<div className="row"style={{
					padding: '25px 40px',
					border: '1px solid #ddd',
					borderTop: '0',
					marginTop: '0',
					fontSize: '19px'
				}}>{post.content}</div>

				<div className="row" style={{
					marginTop: '35px',
					marginBottom: '35px',
				}}>
					<div className="col-md-11" style={{
						padding: '0'
					}}>
						<textarea rows="2" style={{
							padding: '25px 40px',
							border: '1px solid #ddd',
							fontSize: '19px',
							width: '100%',
							resize: 'none'
						}} placeholder="당신 의견을 등록해 주세요. 주제와 무관한 댓글이나 악플은 삭제될 수 있습니다."
							value={form.content} onChange={onChangeHandler} name="content"/>	
					</div>
					<div className="col-md-1" style={{
						padding: '0',
					}}>
						<button className="btn btn-primary" style={{
							width: '100%',
							fontSize: '19px',
							height: '106px',
							borderRadius: '0'
						}} onClick={submitComment}>등록</button>
					</div>
				</div>

				<div className="row">
					<div>
                        {commentSpinner && <Spinner/>}
                    </div>

					{commentList && commentList.map((item) => 
					<Comment
						key={item.id}
						agreeDisagree={item.agreeDisagree}
						agreeNum={item.agreeNum}
						disagreeNum={item.disagreeNum}
						uploadTime={item.uploadTime}
						userName={item.userName}
						id={item.id}
						content={item.content}
						mensionList={item.mensionList}
					/>)}
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

export default CommunicatePostPage;