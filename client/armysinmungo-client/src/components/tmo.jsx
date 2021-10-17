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
					 }}>오늘의 생각</div>
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
						
						>대화</span>

						<span style={{
							fontSize: '22px'
						}}> 
						1. 유튜브 미디어 등등 전세계 언어 자막 제작 지원이 필요한 모든 사회에 전세계 언어 자막 제작 지원을 무한대로 잘 해서 문화 교류가 최고로 좋은 전세계 융합 글로벌 사회를 잘 만듭시다.
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
							backgroundColor: '#0b845b',
							color: 'white',
							padding: '5px 10px',
							fontSize: '20px',
							verticalAlign: '1px',
							marginRight: '10px',
						}}
						
						>대화</span>

						<span style={{
							fontSize: '22px'
						}}> 
						1. 유튜브 미디어 등등 전세계 언어 자막 제작 지원이 필요한 모든 사회에 전세계 언어 자막 제작 지원을 무한대로 잘 해서 문화 교류가 최고로 좋은 전세계 융합 글로벌 사회를 잘 만듭시다.
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
							backgroundColor: '#0b845b',
							color: 'white',
							padding: '5px 10px',
							fontSize: '20px',
							verticalAlign: '1px',
							marginRight: '10px',
						}}
						
						>대화</span>

						<span style={{
							fontSize: '22px'
						}}> 
						1. 유튜브 미디어 등등 전세계 언어 자막 제작 지원이 필요한 모든 사회에 전세계 언어 자막 제작 지원을 무한대로 잘 해서 문화 교류가 최고로 좋은 전세계 융합 글로벌 사회를 잘 만듭시다.
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
							backgroundColor: '#017ca5',
							color: 'white',
							padding: '5px 10px',
							fontSize: '20px',
							verticalAlign: '1px',
							marginRight: '10px',
						}}
						
						>투표</span>

						<span style={{
							fontSize: '22px'
						}}> 
						1. 유튜브 미디어 등등 전세계 언어 자막 제작 지원이 필요한 모든 사회에 전세계 언어 자막 제작 지원을 무한대로 잘 해서 문화 교류가 최고로 좋은 전세계 융합 글로벌 사회를 잘 만듭시다.
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
							backgroundColor: '#0b845b',
							color: 'white',
							padding: '5px 10px',
							fontSize: '20px',
							verticalAlign: '1px',
							marginRight: '10px',
						}}
						
						>대화</span>

						<span style={{
							fontSize: '22px'
						}}> 
						1. 유튜브 미디어 등등 전세계 언어 자막 제작 지원이 필요한 모든 사회에 전세계 언어 자막 제작 지원을 무한대로 잘 해서 문화 교류가 최고로 좋은 전세계 융합 글로벌 사회를 잘 만듭시다.
						</span>
					</a>


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
				<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
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
