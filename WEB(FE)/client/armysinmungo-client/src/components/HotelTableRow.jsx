import React, { useState, useEffect } from 'react';
import HotelMap from './HotelMap';

const HotelTableRow = (props) => {
	const [modalSwitch, setModalSwitch] = useState('true');
	
	const {
		index,
		location,
		name,
		type,
		tel,
		address,
		
	} = props;
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
	
	useEffect(()=> {
		
	}, []);
	
	useEffect(() => {
	}, [modalSwitch])
	
	return (

			<tr key={name}>
			  <th scope="row">{index+1}</th>
			  <td>
				<button onClick={modalOnHandler} type="button" data-toggle="modal" data-target={'#' + modalId} className="btn btn-link" style={{textDecoration: 'none', padding: '0', fontSize: '16px'}}>
				  {name}
				</button>
					<div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden='true'>
					  <div className="modal-dialog" role="document">
						<div className="modal-content">
						  <div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel" style={{fontSize: '20px', width: '80%', fontWeight:'500', 'color': 'black'}}>{name}</h5>
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
							    <a href={mapUrl} target="_blank" style={{ color: 'white', fontSize: '25px',}}>
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
										지도보기
									</div>
							    </a>
							    <a href={detailUrl} target="_blank" style={{ color: 'white', fontSize: '25px',}}>
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
										상세정보
									</div>
							    </a>
							    <a href={directionUrl} target="_blank" style={{ color: 'white', fontSize: '25px',}}>
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
										길찾기
									</div>
							    </a>
							    <a href={roadviewUrl} target="_blank" style={{ color: 'white', fontSize: '25px',}}>
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
										로드뷰
									</div>
							    </a>
							  </div>
							<div style={{ padding: '12px 8px', marginTop: '25px', }}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
								  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
								</svg> <span style={{fontSize: '20px'}}>{address}</span>
							</div>
						
							<div style={{ padding: '12px 8px' }}>
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

			  </td>
			  <td>{address}</td>
			</tr>
			
			

	);
};

export default HotelTableRow;