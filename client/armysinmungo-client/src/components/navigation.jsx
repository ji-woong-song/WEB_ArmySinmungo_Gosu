export const Navigation = (props) => {
  
  const logoutHandler = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userMilNum");
    window.location.href = "/login";
  }
  
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll p-0' href='/'
			  style={{ fontFamily: 'Do Hyeon, sans-serif', padding: '0', marginLeft: '0' }}>
            <img src="/img/logo.png" height="50px" />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'  style={{color : 'black'}}>
            <li>
              <a href='/communicate'  style={{color : 'black'}}>
                소통하기
              </a>
            </li>
            <li>
              <a href='/free'  style={{color : 'black'}}>
                생각쓰기
              </a>
            </li>
            <li>
              <a href='/debate'  style={{color : 'black'}}>
                토론하기
              </a>
            </li>
            <li>
              <a href='/letter'  style={{color : 'black'}}>
                소원수리
              </a>
            </li>
			      <li>
              <a href='/analysis'  style={{color : 'black'}}>
                빅데이터
              </a>
            </li>
            <li>
              <a 
              style={{
                color: '#286090',
                cursor: 'pointer'
              }}
              onClick={logoutHandler}>
                로그아웃
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
