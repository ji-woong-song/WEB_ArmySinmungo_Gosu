import { useState, useEffect } from 'react'
import { Navigation } from '../navigation'
import PostCard from '../PostCard';
import Footer from '../Footer';
import Spinner from '../Spinner';

const FreePage = () => {


	const [postList, setPostList] = useState([]);
	const [spinner, setSpinner] = useState(false);

  const getData = () =>{ 
	  setSpinner(true);
	fetch("/board/free/post/all")
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
					}}>생각쓰기</div>
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
					<div style={{ margin: '0 auto' }}>
					<select className="form-select form-select-lg" aria-label="Default select example" style={{
									height: '45px',
									fontSize: '20px',
									padding: '0 15px'
								}}>
									<option value="title">제목</option>
									<option value="content">내용</option>
								</select>
								<input type="text" className="form-controll" placeholder="검색어를 입력해주세요."
								 style={{
									height: '45px',
									fontSize: '20px',
									padding: '0 15px',
									marginLeft: '10px',
									marginRight: '25px',
								}}/>
								<button type="button" className="btn btn-primary" style={{
									height: '45px',
									padding: '0 15px',
									fontSize: '20px',
									border: '0',
									marginLeft: '15px',
									width: '115px',
									verticalAlign: '-1px'
								}}>검색</button>
								<button type="button" className="btn btn-primary" style={{
									height: '45px',
									padding: '0 15px',
									fontSize: '20px',
									border: '0',
									marginLeft: '10px',
									width: '115px',
									backgroundColor: '#909090',
									verticalAlign: '-1px'
								}}>초기화</button>
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
					<span>총 <span style={{ color : 'black' }}>{postList ? postList.length : 0}건</span></span> | <span style={{color : 'black'}}>최신순</span>

					<button type="button" className="btn btn-info" style={{
						fontSize: '17px',
						float: 'right'
					}} onClick={()=>window.location.href='/free-write'}>글쓰기</button>
				</div>

				<div className="row" style={{
					marginTop: '20px',
					marginBottom: '20px',
				}}>
					{postList && postList.map((item) => (
						<PostCard
							type={'free'}
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

export default FreePage;