export const Golf = (props) => {
  return (
    <div id='golf' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'
			 style={{
				  marginBottom: '0px',
			  }}>
          <h2 style={{ fontFamily: 'Do Hyeon, sans-serif', }}>체력단련장</h2>
		  <p>
            체력단련장을 이용해 보세요!  
          </p>
        </div>
        <div className='row'>
  			<div key='1' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/golf/welfare.png)',
					}}></i>
                  <h3>국군복지단</h3>
				  <a href="https://www.welfare.mil.kr/content/content.do?m_code=7">
					  <p>바로가기</p>
                	</a>
			   </div>
			<div key='2' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/golf/army.jpg)',
					}}></i>
                  <h3>육군</h3>
                  <a href="https://www.armywelfaregolf.mil.kr/">
					  <p>바로가기</p>
                	</a>
                </div>
			<div key='3' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/golf/navy.png)',
					}}></i>
                  <h3>해군</h3>
					
					<a href="https://welfare.navy.mil.kr/GolfPyuUseCourse.do">
					  <p>바로가기</p>
                	</a>
                </div>
			<div key='4' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/golf/rokaf.jpg)',
					}}></i>
                  <h3>공군</h3>
                  <a href="https://welfare.airforce.mil.kr:446/mbshome/mbs/welfare/subview.do?id=welfare_010100000000">
					  <p>바로가기</p>
                	</a>
                </div>
        </div>
      </div>
    </div>
  )
}
