import KakaoMap from './KakaoMap.js';

export const Tmo = (props) => {

	const showUserInfo = () => {
		let message = "";
		const userRank = localStorage.getItem("rank") === "SOLDIER" ? "병사" : "지휘관";
		message += `이름 : ${localStorage.getItem("userName")}\n`;
		message += `군번 : ${localStorage.getItem("milNum")}\n`;
		message += `부대 : ${localStorage.getItem("unitBelong")}\n`;
		message += `대대 : ${localStorage.getItem("unitName")}\n`;
		message += `구분 : ${userRank}`;

		alert(message);
	}

  return (
    <div id='tmo' className='text-center'>
      <div className='container'>
		<div className="row">
			<div className="col-md-5 col-sm-12" 
			style={{ 
				padding: '25px',
				height: "365px",
				border: "1px solid #c3c3c3",
				backgroundColor: 'white',
				width: "48%"
				 }}>
					 <div style={{
						 fontSize: '30px',
						 marginTop: '5px',
						 marginBottom: '30px',
						 color: '#333'
					 }}>오늘의 이야기</div>


					 <div style={{
						 textAlign: 'left',
						 padding: '0 80px',
					 }}>

					<a style={{
						display:'block',
						textOverflow: 'ellipsis',
    					whiteSpace: 'nowrap',
						overflow: 'hidden',
						color: 'black',
						marginTop: '13px',
					}}>
						
						<span style={{
							display: 'inline-block',
							height: '35px',
							borderRadius: '40px',
							backgroundColor: '#0b845b',
							color: 'white',
							padding: '5px 10px',
							fontSize: '20px',
							verticalAlign: '1px',
							marginRight: '10px',
						}}
						
						>소통</span>

						<span style={{
							fontSize: '22px'
						}}> 
							일일취사 도우미 불편사항
						</span>
					</a>

					<a style={{
						display:'block',
						textOverflow: 'ellipsis',
    					whiteSpace: 'nowrap',
						overflow: 'hidden',
						color: 'black',
						marginTop: '13px',
					}}>
						
						<span style={{
							display: 'inline-block',
							height: '35px',
							borderRadius: '40px',
							backgroundColor: 'rgb(86, 169, 2)',
							color: 'white',
							padding: '5px 10px',
							fontSize: '20px',
							verticalAlign: '1px',
							marginRight: '10px',
						}}
						
						>토론</span>

						<span style={{
							fontSize: '22px'
						}}> 
휴가 누구부터 보내야 하는가?</span>
					</a>

					<a style={{
						display:'block',
						textOverflow: 'ellipsis',
    					whiteSpace: 'nowrap',
						overflow: 'hidden',
						color: 'black',
						marginTop: '13px',
					}}>
						
						<span style={{
							display: 'inline-block',
							height: '35px',
							borderRadius: '40px',
							backgroundColor: 'rgb(1, 124, 165)',
							color: 'white',
							padding: '5px 10px',
							fontSize: '20px',
							verticalAlign: '1px',
							marginRight: '10px',
						}}
						
						>생각</span>

						<span style={{
							fontSize: '22px'
						}}> 
본부중대 영외급식 메뉴 추천						</span>
					</a>

					<a style={{
						display:'block',
						textOverflow: 'ellipsis',
    					whiteSpace: 'nowrap',
						overflow: 'hidden',
						color: 'black',
						marginTop: '13px',
					}}>
						
						<span style={{
							display: 'inline-block',
							height: '35px',
							borderRadius: '40px',
							backgroundColor: 'rgb(1, 124, 165)',
							color: 'white',
							padding: '5px 10px',
							fontSize: '20px',
							verticalAlign: '1px',
							marginRight: '10px',
						}}
						
						>생각</span>

						<span style={{
							fontSize: '22px'
						}}> 
코로나 보상 휴가						</span>
					</a>

					<a style={{
						display:'block',
						textOverflow: 'ellipsis',
    					whiteSpace: 'nowrap',
						overflow: 'hidden',
						color: 'black',
						marginTop: '13px',
					}}>
						
						<span style={{
							display: 'inline-block',
							height: '35px',
							borderRadius: '40px',
							backgroundColor: 'rgb(86, 169, 2)',
							color: 'white',
							padding: '5px 10px',
							fontSize: '20px',
							verticalAlign: '1px',
							marginRight: '10px',
						}}
						
						>토론</span>

						<span style={{
							fontSize: '22px'
						}}> 
테니스장, 병사가 제설해야 하는가?						</span>
					</a>
					</div>

				 </div>
			<div className="col-md-5 col-sm-12" 
			style={{ 
				padding: '25px',
				height: "365px",
				border: "1px solid #c3c3c3",
				backgroundColor: 'white',
				width: "48%",
				float: 'right' }}>

					<div style={{
						 fontSize: '30px',
						 marginTop: '5px',
						 marginBottom: '30px',
						 color: '#333'
					 }}>우리부대 빅데이터</div>

					<div className="row" style={{
						paddingTop: '15px',
					}}>
					 	<div className="col-md-6">
						 <div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>1. 코로나</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>2. 근무</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>3. 휴가</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>4. 시간</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>5. 취사</div>

						 </div>
						 <div className="col-md-6">
						 <div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>6. 힘들다</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>7. 감사</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>8. 신병</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>9. 무전</div>
							<div style={{
								fontSize: '20px',
								marginBottom: '8px',
								color: 'black'
							}}>10. 제설</div>
						 </div>
					</div>
			</div>
		</div>

		<div className="row" style={{ marginTop: '40px' }}>
			<div className="col-md-5 col-sm-12" style={{
				backgroundColor: 'white',
				border: "1px solid #c3c3c3",
				height: '70px',
				width: "48%",
				fontSize: '30px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#333'
			}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
				&nbsp;{localStorage.getItem("unitBelong")}</div>

			<div className="col-md-5 col-sm-12" style={{ 
				backgroundColor: 'white',
				height: '70px',
				width: "48%",float: 'right',
				}}>
				<div className="row">
					<div className="col-md-6" style={{
						backgroundColor: '#018f7f',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: 'white',
						fontSize: '30px',
						cursor: 'pointer'
					}} onClick={showUserInfo}> 내 정보 </div>

					<div className="col-md-6" style={{
						backgroundColor: '#feb511',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: 'black',
						fontSize: '30px',
						cursor: 'pointer'
					}} onClick={() => window.location.href="https://github.com/osamhack2021/WEB_CLOUD_ArmySinmungo_Gosu"}> 국방신문고 </div>
				</div>
			</div>

		</div>


      </div>
    </div>
  )
}
