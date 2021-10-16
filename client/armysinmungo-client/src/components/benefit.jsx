export const Benefit = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        {/* <div className='col-md-10 col-md-offset-1 section-title'
			 style={{
				  marginBottom: '0px',
			  }}>
          <h2 style={{ fontFamily: 'Do Hyeon, sans-serif', }}>병사할인혜택</h2>
		  <p>
            다양한 병사할인혜택을 알아보세요!  
          </p>
        </div> */}
        <div className="row">
          <div className="col-md-3" >
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src="https://www.epeople.go.kr/resource/images/paid/nep/thk/main/s1_item_icon_2.png" alt="" 
                      style={{float: 'right'}}/>
              </div>
              <div className="col-sm-12 col-md-6 h4" style={{ color: 'black', fontSize: '21px', textAlign:'left' }}>생각쓰기</div>
            </div>
          </div>
          
          <div className="col-md-3" style={{borderLeft: '1px solid gray'}} >
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src="https://www.epeople.go.kr/resource/images/paid/nep/thk/main/s1_item_icon_3.png" alt="" 
                      style={{float: 'right'}}/>
              </div>
              <div className="col-sm-12 col-md-6 h4" style={{ color: 'black', fontSize: '21px', textAlign:'left' }}>생각쓰기</div>
            </div>
          </div>

          <div className="col-md-3" style={{borderLeft: '1px solid gray'}}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src="https://www.epeople.go.kr/resource/images/paid/nep/thk/main/s1_item_icon_1.png" alt="" 
                      style={{float: 'right'}}/>
              </div>
              <div className="col-sm-12 col-md-6 h4" style={{ color: 'black', fontSize: '21px', textAlign:'left' }}>생각쓰기</div>
            </div>
          </div>

          <div className="col-md-3" style={{borderLeft: '1px solid gray'}}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src="https://www.epeople.go.kr/resource/images/paid/nep/thk/main/s1_item_icon_4.png" alt="" 
                      style={{float: 'right'}}/>
              </div>
              <div className="col-sm-12 col-md-6 h4" style={{ color: 'black', fontSize: '21px', textAlign:'left' }}>생각쓰기</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
