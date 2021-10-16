export const Header = (props) => {
  const title = "";
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
				  {/*
                  	{props.data ? props.data.title : 'Loading'}
                  */}
				  <span style={{ color: '#56A902', }}>ARMY</span>
				  <span style={{ color: '#ffda7e', }}> + </span>
				  <span style={{ color: '#3B4E32', }}>신문고</span>
                </h1>
                <p style={{ color: '#976241', }}>
					{/*
						{props.data ? props.data.paragraph : 'Loading'}
					*/}
					우리의 생각은 우리에게 중요하니까, 국방신문고
				</p>
                
			{/*	<a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>
			*/}
			  </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
