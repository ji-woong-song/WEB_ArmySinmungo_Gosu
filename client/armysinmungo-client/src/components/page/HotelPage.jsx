import { useState, useEffect } from 'react'
import { Navigation } from '../navigation'
import HotelTableRow from '../HotelTableRow'

const locationList = [
	'선택',
	'서울',
	'경기',
	'강원',
	'충북',
	'충남',
	'전북',
	'전남',
	'경북',
	'경남',
	'제주',
	'부산',
	'대구',
	'인천',
	'광주',
	'대전',
	'울산'
]


const HotelPage = () => {
	const [hotelPageData, setHotelPageData] = useState([])
	const [filteredData, setFilteredData] = useState([])
	const [selectLocation, setSelectLocation] = useState('');
	const [selectType, setSelectType] = useState('');
	
	const setFilteredDatabySelect = () => {
		let tempList = [];
		
		if(selectLocation === '선택' && selectType === '선택') {
			setFilteredData([]);
		} else if(selectLocation === '선택') {
			for(let i=0; i<hotelPageData.length; i++) {
					const ty = hotelPageData[i].type;
					if(ty.includes(selectType)) {
						tempList.push(hotelPageData[i]);
					}
				}
		} else if(selectType === '선택') {
			for(let i=0; i<hotelPageData.length; i++) {
					const loca = hotelPageData[i].location;
					if(loca.includes(selectLocation)) {
						tempList.push(hotelPageData[i]);
					}
				}
		} else {
			for(let i=0; i<hotelPageData.length; i++) {
				const loca = hotelPageData[i].location;
				const ty = hotelPageData[i].type;

				if(loca.includes(selectLocation) && ty.includes(selectType)) {
					tempList.push(hotelPageData[i]);
				}
			}
			setFilteredData(tempList);
		}
		
		
		
	}
	
	const getData=()=>{
		fetch('/data/hotel_data.json'
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
			setHotelPageData(myJson);
		});
  }
	
	useEffect(() => {
		setFilteredDatabySelect();
	}, [selectType, selectLocation])
	
	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Navigation/>
			<div style={{
					width: '100%',
					height: '400px',
					backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/04/15/06/13/beach-4128541_960_720.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					textAlign: 'center',
				}}>
				<div style={{
					height: '100%',
					display: 'inline-block',
					paddingTop: '200px',
					textAlign: 'center',
					fontWeight: '100',
					fontSize: '70px',  
					color: 'rgb(255, 218, 126)'
					}}>호텔/콘도</div>
			</div>
			<div className="container" style={{
					paddingTop:'50px',
				}}>
				<div id="filter-wrap" style={{
						
					}}>
					
				</div>
				<span style={{
						display: 'inline-block',
						marginRight: '10px',
						fontSize: '20px',
					}}>지역 : </span>
				<select className="form-select" onChange={(e)=>{setSelectLocation(e.target.value)}} value={selectLocation}
					style={{
						backgroundColor: 'white',
						fontSize: '20px',
						padding: '8px 5px',
						borderRadius: '10px',
						
					}}>
					{locationList.map(location => {
						return (
							<option value={location}>{location}</option>
						);
					})}	
				</select>

				<hr style={{
						height: '1.25px',
						backgroundColor: '#e1e1e1',
						width: '100%',	
					}}/>
				<table className="table">
					<thead>
						<tr>
						  <th scope="col">번호</th>
						  <th scope="col">이름</th>
						  <th scope="col">주소</th>
						</tr>
					</thead>
					<tbody>
					{ filteredData.map( (data, index) => {
						return <HotelTableRow
								   index={index}
								   key={data.name}
								   location={data.location}
								   name={data.name}
								   tel={data.tel}
								   address={data.address}
								   id={data.id}
								   />
					}) }
					</tbody>
				</table>
				{ filteredData.length === 0 && 
					<div style={{ textAlign: 'center', }}>
						검색된 데이터가 없습니다. 지역을 선택해보세요.
					</div>  }
			</div>
		</div>
	);
}

export default HotelPage;