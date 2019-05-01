import React from 'react';

import {
	GoogleMap,
	Marker,
	withGoogleMap,
	withScriptjs
} from 'react-google-maps';

const Map = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap
			defaultZoom={4}
			defaultCenter={{
				lat: parseFloat(props.location.lat),
				lng: parseFloat(props.location.lng)
			}}
		>
			{props.isMarkerShown && (
				<Marker
					position={{
						lat: parseFloat(props.location.lat),
						lng: parseFloat(props.location.lng)
					}}
				/>
			)}
		</GoogleMap>
	))
);

export default Map;
