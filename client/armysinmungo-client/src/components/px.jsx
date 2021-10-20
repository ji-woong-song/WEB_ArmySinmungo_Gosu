import React, { useEffect, useRef, useState } from 'react';
import PxItem from './PxItem';

export const Px = (props) => {
    const [pxData, setPxData] = useState([])
	
	const initSelectTab = useRef(null);
	  useEffect(() => {
		initSelectTab.current.click();
	  }, []);
	
	const ID = () => {
		return Math.random().toString(36).substr(2, 9);
	}
	
	const getData=()=>{
		fetch('/data/px_data.json'
		,{
		  headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		   }
		}
		)
		  .then(function(response){
			return response.json();
		  })
		  .then(function(myJson) {
			console.log(myJson);
			setPxData(myJson);
		});
    }
	
	useEffect(() => {
		getData();
	}, []);
	
	
	return (
    <div id='px' className='text-center'>
      <div className='container'>
        <div className='col-md-12 col-md-offset-1 section-title'
			 style={{
				margin: '0 auto',
					
			  }}>
          <h2 style={{ fontFamily: 'Do Hyeon, sans-serif', }}>PX인기상품</h2>
		  <p style={{
					marginBottom: '60px',
			
				}}>
			가족들, 친구들을 위한 선물!
          </p>
        </div>
		<div className="container">
			<ul className="nav nav-tabs">
			  <li className="nav-item">
				<a className="nav-link" data-toggle="tab" href="#qwe" ref={initSelectTab}>화장품</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" data-toggle="tab" href="#asd">건강식품/기타</a>
			  </li>

			<li className=""
				style={{
						float: 'right',
					}}>
				<div className="" data-toggle="tab"
					style={{
						padding: '10 15px',
					}}>선물로 가져가기 좋은 상품들!</div>
			  </li>
			</ul>
			<div className="tab-content">
			  <div className="tab-pane fade active" id="qwe">
				
				  <div className='row'>
					  {pxData && pxData.map((data, index) => {
						  return (
						  	  data.type === 'cosmetic' && <PxItem
								  key={ID()}
								  name={data.name}
								  imgSrc={data.imgSrc}
							  />
						  );
					  })}
				  </div>
			  </div>
			  <div className="tab-pane fade" id="asd">
				<div className='row'>
				  {pxData && pxData.map((data, index) => {
					  return (
						  data.type === 'etc' && <PxItem
							  key={ID()}
							  name={data.name}
							  imgSrc={data.imgSrc}
						  />
					  );
				  })}
			  </div>
			  </div>

			</div>
		</div>
		  {/*
		  <a style={{
				  display: 'inline-block',
				  backgroundColor: 'rgb(74,174,160)',
				  fontSize: '20px',
				  padding: '13px 15px',
				  color: 'white',
			 	  borderRadius: '27px',
				  marginTop: '40px',
			  }} href="#">할인혜택 더보기</a>
      		*/}
	  </div>
    </div>
  )
}
