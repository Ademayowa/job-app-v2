// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import ReactMapGl, { Marker } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import Geocode from 'react-geocode';

// export default function JobMap({ jb }) {
//   const [lat, setLat] = useState(null);
//   const [lng, setLng] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [viewport, setViewport] = useState({
//     latitude: 9.081999,
//     longitude: 8.675277,
//     zoom: 12,
//     width: '100%',
//     height: '500px',
//   });

//   useEffect(() => {
//     // Get latitude & longitude from address.
//     Geocode.fromAddress(jb.location).then(
//       (response) => {
//         const { lat, lng } = response.results[0].geometry.location;
//         setLat(lat);
//         setLng(lng);
//         setViewport({ ...viewport, latitude: lat, longitude: lng });
//         setLoading(false);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }, []);

//   Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);

//   if (loading) return false;

//   console.log(lat, lng);

//   return (
//     <ReactMapGl
//       {...viewport}
//       mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
//       onViewportChange={(vp) => setViewport(vp)}
//     >
//       <Marker key={jb.id} latitude={lat} longitude={lng}>
//         How far
//       </Marker>
//     </ReactMapGl>
//   );
// }
