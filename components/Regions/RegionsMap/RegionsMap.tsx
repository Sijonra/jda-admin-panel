'use client';

import React, { useEffect } from 'react';
import './RegionsMap.scss';
import 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import useTheme from '@/hooks/useTheme';
import { leaftletPoints } from './MapPoints.data';
import MarkerClusterGroup from 'react-leaflet-cluster';

const RegionsMap = () => {
	const theme = useTheme((state) => state.theme);

	const customIcon = new Icon({
		iconUrl: 'https://icons8.com/icon/3771/place-marker',
		iconSize: [38, 38],
	});

	const markers = leaftletPoints.map((point, index) => (
		<Marker key={index} icon={customIcon} position={[point.lat, point.long]}>
			<Popup>
				<div>
					<h6 className='mb-1'>{point.name}</h6>
					<p className='m-0 text-500'>
						{point.street}, {point.location}
					</p>
				</div>
			</Popup>
		</Marker>
	));

	const lightThemeUrl =
		'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
	const darkThemeUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';

	const tileLayerUrl = theme === 'dark' ? darkThemeUrl : lightThemeUrl;

	return (
		<MapContainer center={[25.659195, 30.182691]} zoom={2} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url={tileLayerUrl}
			/>
			<MarkerClusterGroup>{markers}</MarkerClusterGroup>
		</MapContainer>
	);
};

export default RegionsMap;
