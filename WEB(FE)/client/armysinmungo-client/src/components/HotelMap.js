/*global kakao*/
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';


const Root = styled.div`
	width: 100%;
    height: 400px;
	border-radius: 40px;
	border: 15px solid rgb(255, 218, 126);
`;

const Map = (props) => {
  const mapRef = useRef();
  const { appKey,
		  longitude,
		  latitude,
	   	  address,
		  level,
		  tel,
		  name,
		 
		} = props;
  const mapId = 'map' + tel;
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;
	document.head.appendChild(script);
	  
	{/*
    const serviceScript = document.createElement('script');
    serviceScript.async = true;
    serviceScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=service&autoload=false`;
	document.head.appendChild(serviceScript);
	*/}

    script.onload = () => {

	  kakao.maps.load(() => {
        let container = document.getElementById(mapId);
        let options = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: level,
        };
        let map = new window.kakao.maps.Map(container, options);
        setTimeout(async function(){ 
			await map.relayout();

			var geocoder = new kakao.maps.services.Geocoder();

			// 주소로 좌표를 검색합니다
			geocoder.addressSearch(address, function(result, status) {

				// 정상적으로 검색이 완료됐으면 
				 if (status === kakao.maps.services.Status.OK) {

					var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

					// 결과값으로 받은 위치를 마커로 표시합니다
					var marker = new kakao.maps.Marker({
						map: map,
						position: coords
					});

					// 인포윈도우로 장소에 대한 설명을 표시합니다
					var infowindow = new kakao.maps.InfoWindow({
						content: '<div style="width:150px;text-align:center;padding:6px 0;">' + name + '</div>'
					});
					infowindow.open(map, marker);

					// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
					map.setCenter(coords);
				} 
			   // 아닐경우 예외처리하기
				else {
					mapRef.current.style = "display: none !important";
				}
			});    
			
			
		}, 1100);
		  
	    
      	
	  });
		  
		  
    };
  }, []);

  return (
    <Root id={mapId} ref={mapRef}>
		{/*
		{map && (
			<MapContext.Provider value={map}>
				{this.children}
			</MapContext.Provider>
		)}
		*/}
	</Root>
  );
};

export default Map;