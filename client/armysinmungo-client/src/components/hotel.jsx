import HotelItem from './HotelItem';

export const Hotel = (props) => {
  return (
    <div id='hotel' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'
			 style={{
				  marginBottom: '0px',
			  }}>
          <h2 style={{ fontFamily: 'Do Hyeon, sans-serif', }}>호텔/콘도</h2>
		  <p style={{ color: 'rgb(151, 98, 65)', marginBottom:'60px', }}>
            국군복지단 복지시설(호텔, 콘도) 정보를 알아보세요!
          </p>
        </div>
        <div className='row'>
  			<HotelItem
				name="국방컨벤션"
				tel="02-748-0744"
				location="서울 용산구"
				imgSrc="https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/hotel/convention.jpg"
				id={152313844}
				address="서울 용산구 용산동 3가 1번지 이태원로 22"
				/>
		
			<HotelItem
				name="웰리힐리파크"
				tel="033-340-3000"
				location="강원 횡성군"
				imgSrc="https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/hotel/weliheli.jpg"
				id={18661839}
				address="강원도 횡성군 둔내면 고원로 451"
				/>
			
			<HotelItem
				name="소노문 양평"
				tel="031-770-7512"
				location="경기 양평군"
				imgSrc="https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/hotel/sonomoon.jpeg"
				id={7825452}
				address="경기도 양평군 개군면 신내길 7번길 55"
				/>
        </div>
		  <a style={{
				  display: 'inline-block',
				  backgroundColor: 'rgb(151, 98, 65)',
				  fontSize: '20px',
				  padding: '13px 15px',
				  color: 'white',
			 	  borderRadius: '27px',
				  marginTop: '40px',
			  }} href="/hotel">호텔/콘도 더보기</a>
      </div>
    </div>
  )
}
