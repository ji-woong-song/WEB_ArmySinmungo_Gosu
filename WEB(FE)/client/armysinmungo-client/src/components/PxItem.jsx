import React from 'react';

const PxItem = (props) => {
	const {
		name,
		imgSrc,
	} = props;
	
	return(
		<div className='col-xs-6 col-md-3'>
			  {' '}
			  <i className='fa fa-comments-o'
				 style={{
					backgroundImage: `url(${imgSrc})`,
				}}></i>
			  <h3 style={{fontSize: '16px'}}>{name}</h3>
		</div>
	);
};

export default PxItem;