import React, { useState, useEffect } from 'react';

const HotelItem = (props) => {
	const {
		name,
		tel,
		location,
		imgSrc,
		id,
		address
	} = props;
	const [modalSwitch, setModalSwitch] = useState('true');
	
	
	const modalId = '_' + Math.random().toString(36).substr(2, 9);
	const locationId = props.id;
	const mapUrl = `https://map.kakao.com/link/map/${locationId}`;
	const directionUrl = `https://map.kakao.com/link/to/${locationId}`;
	const roadviewUrl = `https://map.kakao.com/link/roadview/${locationId}`;
	const detailUrl = `https://place.map.kakao.com/${locationId}`;
	
	const modalOnHandler = (e) => {
		e.preventDefault();
		setModalSwitch('false');
		console.log(modalSwitch);
	}
	
	const modalOffHandler = (e) => {
		e.preventDefault();
		setModalSwitch('true');
		console.log(modalSwitch);
	}
	
	
	return (
			<div key={`id${name}`} className='col-xs-12 col-md-4' style={{marginBottom:'35px',}}>
				<div className='card' style={{
						width:'100%',
							backgroundColor: 'white',
							borderRadius: '40px',
					}}>

					{/*
				  <img className='card-img-top' src='' alt='Card image cap'
					  style={{
							width: '100%',
						}}/>
						
						*/}
					<div className="cardContent" style={{
							padding: '10px',
						}}>
					<div style={{
							width: '100%', 
							height: '250px',
							backgroundImage: `url(${imgSrc})`,
							backgroundSize: 'cover', 
							backgroundPosition: 'center',
							overflow: 'hidden',
							borderRadius:'40px',
						}}></div>
				  <div className='card-body'>
					<h5 className='card-title' 
						style={{
							  fontSize: '23px',
							  marginTop: '25px',
							  color: 'black',
						  }}>{name}</h5>
					  	
					 <div style={{
							  width: '100%',
							  textAlign: 'left',
							  padding: '10px 20px',
						  }}>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-telephone-fill" viewBox="0 0 16 16">
						  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
						</svg>
						<span style={{
									fontSize: '20px',
									display: 'inline-block',
									marginLeft:'6px',
									color: 'black',
								}}>{tel}</span>

						</div>
						 <div>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg>
						<span style={{
									fontSize: '20px',
									display: 'inline-block',
									marginLeft:'6px',
									color: 'black',
								}}>{location}</span>
						  
						</div>
						
					  </div>
					  <a onClick={modalOnHandler} type="button" data-toggle="modal" data-target={'#' + modalId} style={{
							  cursor: 'pointer',
						  }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" className="bi bi-arrow-right-circle" viewBox="0 0 16 16"
							style={{
							  position: 'absolute',
						      right: '45px',
							  bottom: '25px',
						  }}>
						  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
						</svg>
						  </a>
					{/*
					 <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					 
					<a href='#' className='btn btn-primary'>Go somewhere</a>
					*/}
					</div>
				  </div>
				</div>

				<div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden='true'>
					  <div className="modal-dialog" role="document">
						<div className="modal-content">
						  <div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel" style={{fontSize: '20px', width: '80%', fontWeight:'500', 'color': 'black', textAlign: 'left'}}>{name}</h5>
							 {/* 
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  	*/}
						  </div>
						  <div className="modal-body">
							  <div style={{
									  width: '100%',
									  height: '400px',
									  border: '15px solid rgb(255, 218, 126)',
									  borderRadius: '40px',
								  }}>
								<div style={{
										  float: 'left',
										  width: '50%',
										  height: '50%',
										  backgroundColor: 'rgb(104, 111, 18)',
										  padding: '3%',
										  backgroundClip: 'content-box',
										  borderRadius: '50px',
										  display: 'flex',
										  justifyContent: 'center',
										  alignItems: 'center',
									  }}>
									<a href={mapUrl} target="_blank" style={{ color: 'white', fontSize: '25px',}}>지도보기</a>
								</div>
								<div style={{
										  float: 'left',
										  width: '50%',
										  height: '50%',
										  backgroundColor: 'rgb(151, 98, 65)',
										  padding: '3%',
										  backgroundClip: 'content-box',
										  borderRadius: '50px',
										  display: 'flex',
										  justifyContent: 'center',
										  alignItems: 'center',
									  }}>
									<a href={detailUrl} target="_blank" style={{ color: 'white', fontSize: '25px',}}>상세정보</a>
								</div>
								<div style={{
										  float: 'left',
										  width: '50%',
										  height: '50%',
										  backgroundColor: 'rgb(199, 202, 156)',
										  padding: '3%',
										  backgroundClip: 'content-box',
										  borderRadius: '50px',
										  display: 'flex',
										  justifyContent: 'center',
										  alignItems: 'center',
									  }}>
									<a href={directionUrl} target="_blank" style={{ color: 'white', fontSize: '25px',}}>길찾기</a>
								</div>
								<div style={{
										  float: 'left',
										  width: '50%',
										  height: '50%',
										  backgroundColor: 'rgb(255, 218, 126)',
										  padding: '3%',
										  backgroundClip: 'content-box',
										  borderRadius: '50px',
										  display: 'flex',
										  justifyContent: 'center',
										  alignItems: 'center',
									  }}>
									<a href={roadviewUrl} target="_blank" style={{ color: 'white', fontSize: '25px',}}>로드뷰</a>
								</div>
							  </div>
							<div style={{ padding: '12px 8px', marginTop: '25px', textAlign: 'left'}}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
								  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
								</svg> <span style={{fontSize: '20px'}}>{address}</span>
							</div>
						
							<div style={{ padding: '12px 8px', textAlign: 'left' }}>
							  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
							  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
							</svg> <span style={{fontSize: '20px'}}>{tel}</span>
							</div>
					
						  </div>
						  <div className="modal-footer">
							<button onClick={modalOffHandler} type="button" className="btn btn-secondary" data-dismiss="modal"
								style={{backgroundColor: 'rgb(255, 218, 126)', color:'rgb(104, 111, 18)'}}>닫기</button>
						  </div>
						</div>
					  </div>
					</div>

			
			
				</div>			
			
	);
}

export default HotelItem;