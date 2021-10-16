import { useState, useEffect } from 'react'
import { Navigation } from '../navigation'
import TmoTableRow from '../TmoTableRow'

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


const TmoPage = () => {
	const [tmoPageData, setTmoPageData] = useState([])
	const [filteredData, setFilteredData] = useState([])
	const [selectLocation, setSelectLocation] = useState('선택');
	const [selectType, setSelectType] = useState('');
	
	const setFilteredDatabySelect = () => {
		let tempList = [];
		
		if(selectLocation === '선택' && selectType === '선택') {
			setFilteredData([]);
		} else if(selectLocation === '선택') {
			for(let i=0; i<tmoPageData.length; i++) {
					const ty = tmoPageData[i].type;
					if(ty.includes(selectType)) {
						tempList.push(tmoPageData[i]);
					}
				}
		} else if(selectType === '선택') {
			for(let i=0; i<tmoPageData.length; i++) {
					const loca = tmoPageData[i].location;
					if(loca.includes(selectLocation)) {
						tempList.push(tmoPageData[i]);
					}
				}
		} else {
			for(let i=0; i<tmoPageData.length; i++) {
				const loca = tmoPageData[i].location;
				const ty = tmoPageData[i].type;

				if(loca.includes(selectLocation) && ty.includes(selectType)) {
					tempList.push(tmoPageData[i]);
				}
			}
			setFilteredData(tempList);
		}
		
		
		
	}
	
	const getData=()=>{
		fetch('/data/tmo_data.json'
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
			setTmoPageData(myJson);
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
					color: 'rgb(59, 78, 50)'
					}}>TMO</div>
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
						  <th scope="col">위치</th>
						</tr>
					</thead>
					<tbody>
					{ filteredData.map( (data, index) => {
						return <TmoTableRow
								   index={index}
								   name={data.name}
								   id={data.id}
								   tel={data.tel}
								   wtime={data.wtime}
								   wendtime={data.wendtime}
								   detail={data.detail}
								   location={data.location}
								   type={data.type}
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

export default TmoPage;