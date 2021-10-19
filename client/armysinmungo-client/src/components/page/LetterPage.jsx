import { useState, useEffect } from 'react'
import { Navigation } from '../navigation'
import PostCard from '../PostCard';
import Footer from '../Footer';
import Spinner from '../Spinner';

const LetterPage = () => {


	const [postList, setPostList] = useState([]);
	const [spinner, setSpinner] = useState(false);

  const getData = () =>{ 
	  setSpinner(true);
	fetch("/board/letter/post/all")
	.then((response) => response.json())
	  .then((data) => {
		  console.log(data.data);
		setPostList(data.data);
		setSpinner(false);
	  });
	}


	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
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
					}}>소원수리</div>
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
						color: 'red' }}>
						병사는 자신이 쓴 소원수리글만 볼 수 있으며 부대 지휘관은 모든 글을 볼 수 있습니다.
					</div>
				</div>
				

				<div className="row" style={{
					 marginLeft: '0',
					 marginTop: '35px',
					 fontSize: '25px',
					 marginRight: '0',
					 textAlign: 'center'
					  }}>
					<span style={{ color : 'black' }}>{localStorage.getItem("unitBelong") && (localStorage.getItem("unitBelong") + " " + localStorage.getItem("unitName"))}</span>
				</div>
				<hr style={{
					width: '100%',
					backgroundColor: '#2d2d2d'
				}}/>

					<div>
                        {spinner && <Spinner/>}
                    </div>



				<div className="row" style={{
					 marginLeft: '0',
					 marginTop: '35px',
					 fontSize: '20px',
					 marginRight: '0'
					  }}>
					<span>총 <span style={{ color : 'black' }}>{ postList ? postList.length : 0}건</span></span> | <span style={{color : 'black'}}>최신순</span>

					<button type="button" className="btn btn-info" style={{
						fontSize: '17px',
						float: 'right'
					}} onClick={()=>window.location.href='/letter-write'}>글쓰기</button>
				</div>

				<div className="row" style={{
					marginTop: '20px',
					marginBottom: '20px',
				}}>
					{postList && localStorage.getItem("rank") === 'SOLDIER' && postList.map((item) => (
						item.userName === localStorage.getItem("userName") &&
						<PostCard
							type={'letter'}
							key={item.id}
							id={item.id}
							agreeNum={item.agreeNum}
							category={item.category}
							content={item.content}
							title={item.title}
							tagged={item.tagged}
							uploadTime={item.uploadTime}
							userName={item.userName}
						/>
					)).reverse() }
					{postList && localStorage.getItem("rank") === 'COMMANDER' && postList.map((item) => (
						<PostCard
							type={'letter'}
							key={item.id}
							id={item.id}
							agreeNum={item.agreeNum}
							category={item.category}
							content={item.content}
							title={item.title}
							tagged={item.tagged}
							uploadTime={item.uploadTime}
							userName={item.userName}
						/>
					)).reverse() }
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default LetterPage;