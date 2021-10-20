/*global kakao*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
	width: 100%;
    height: 600px;

	border-radius: 40px;
	border: 15px solid rgb(255, 218, 126);
`;


class KakaoMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.mapScript();
    }

    mapScript = () => {
        const { appKey, latitude, longitude, level, zoomable } = this.props;

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById('map');
                let options = {
                    center: new kakao.maps.LatLng(latitude, longitude),
                    level: level ? level : 3,
 					draggable: false,
				};
                let map = new window.kakao.maps.Map(container, options);
                map.setZoomable(zoomable !== undefined ? zoomable : true);
                this.setState({ map });
				
				const marker = new kakao.maps.Marker({
					position: new kakao.maps.LatLng(latitude, longitude),
				})
				marker.setMap(map);
            });
        };
    };

    render() {
        const { map } = this.state;
        return (
            <Root id="map">
                {/*
				{map && (
                    <MapContext.Provider value={map}>
                        {this.props.children}
                    </MapContext.Provider>
                )}
				*/}
            </Root>
        );
    }
}

KakaoMap.propTypes = {
    level: PropTypes.number,
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    appKey: PropTypes.string.isRequired,
    zoomable: PropTypes.bool,
};

export default KakaoMap;