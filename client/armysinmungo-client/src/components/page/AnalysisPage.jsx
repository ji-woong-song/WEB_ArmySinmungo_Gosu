import { useState, useEffect } from 'react'
import { Navigation } from '../navigation'
import PostCard from '../PostCard';
import Footer from '../Footer';
import PosNegChart  from '../PosNegChart';

const AnalysisPage = () => {

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
					}}>빅데이터</div>
			</div>
			<div className="container" style={{
					paddingTop:'50px',
					paddingBottom: '70px'
				}}>
				
				<div className="row" style={{
					 marginLeft: '0',
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


				<div className="row" style={{marginLeft: '0', marginRight: '0', 
										marginTop: '40px', marginBottom: '100px'}}>
					<div className="col-md-5"
						style={{

							height: '400px',
						
						}}
					>
						<div style={{
							fontSize: '22px',
							textAlign: 'center',
							color: 'black',
							marginBottom: '10px',
						}}>전체 글 긍부정 비율</div>
						<div style={{
							border: '1px solid rgb(221, 221, 221)',
							height: '100%',
						}}>
							<PosNegChart/>
						</div>
						<div style={{
							marginTop: '10px',
							fontSize: '20px',
							color: 'black'
						}}>
							<span style={{
								height: '20px', 
								width: '30px',
								display: 'inline-block',
								backgroundColor: 'rgb(0, 136, 254)',
								borderRadius: '10px',
								
								}}></span>
							<span style={{
								verticalAlign: '2px'
							}}> : 긍정</span>

							<span style={{
								height: '20px', 
								width: '30px',
								display: 'inline-block',
								backgroundColor: 'rgb(0, 196, 159)',
								borderRadius: '10px',
								verticalAlign: '-1px',
								marginLeft: '20px'
								}}></span>
							<span style={{
								verticalAlign: '2px'
							}}> : 부정</span>
						</div>


						<div style={{
							marginTop: '10px',
							fontSize: '20px',
							color: 'black'
						}}>
							<div style={{
							marginTop: '10px',
							fontSize: '20px',
							color: 'black'
						}}>

						</div>
							병사들이 작성한 전체글들 중 긍정적인 성격의 글, 부정적인 성격의 글들의 비율입니다.
						</div>
					</div>


					<div className="col-md-2"
					style={{

						height: '400px',
							
					}}>
						<div style={{
							fontSize: '22px',
							textAlign: 'center',
							color: 'black',
							marginBottom: '10px',
						}}>키워드 TOP10</div>
						<div style={{
						border: '1px solid rgb(221, 221, 221)',
						height: '100%',
						padding: '15px'
						}}>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>1. 키워드</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>2. 키워드</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>3. 키워드</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>4. 키워드</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>5. 키워드</div>


							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>6. 키워드</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>7. 키워드</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>8. 키워드</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>9. 키워드</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>10. 키워드</div>
						</div>


						<div style={{
							marginTop: '10px',
							fontSize: '20px',
							color: 'rgb(59, 78, 50)'
						}}>KEYWORD</div>

						<div style={{
							marginTop: '10px',
							fontSize: '20px',
							color: 'black'
						}}>
							많이 쓰인 단어들의 순위입니다.
						</div>
					</div>

					<div className="col-md-5"
						style={{
							
							height: '400px',
								
						}}>
						<div style={{
							fontSize: '22px',
							textAlign: 'center',
							color: 'black',
							marginBottom: '10px',
						}}>키워드 발생 빈도</div>
						<div style={{
							border: '1px solid rgb(221, 221, 221)',
							height: '100%',
						}}>
							<PosNegChart/>
						</div>		

					</div>
					
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

export default AnalysisPage;