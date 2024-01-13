// import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
// import "leaflet-defaulticon-compatibility";

// const Map = () => {
//   const cent=[12.859324, 74.846866]
//   return (
//     <MapContainer center={cent} zoom={14} scrollWheelZoom={false} style={{height: "90%", width: "100%"}}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
//       <Marker 
//       position={cent}
//       draggable={true}
//       animate={true}
//       >
//         <Popup>
//           <h3 className='text-slate-900'>Hey you found me :)</h3>
//         </Popup>
//       </Marker>
//     </MapContainer>
//   )
// }

// export default Map
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react'
import heart from '../../assets/broken-heart.png'



const Map = () => {
  const [cent, setCent] = useState([12.8617863, 74.8389166]);
  const [place, setPlace] = useState('')

  const search = async (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_LOCATION_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_LOCATION_HOST
      }
    };

    try {
      const response = await fetch(`https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=${place}`, options)
      const data = await response.json()
      const longitude = data.Results[0].longitude
      const latitude = data.Results[0].latitude
      setCent([latitude, longitude])
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (e) => {
    setPlace(e.target.value)
  }

  if (typeof window !== 'undefined') {
    // add your Leaflet/FontAwesome code here
    return (
      <>
      <div className='h-4/5'>
        <form className='flex justify-between mb-3'>
          <h2 className='text-gray-400 font-medium text-sm md:text-xl'>Locate Us <FontAwesomeIcon icon={faLocationDot} /></h2>
          <div className='flex'>
            <input type="text" placeholder='Search' className='px-1 rounded' value={place} onChange={handleInputChange} />
            <button className='transition duration-150 px-2 md:px-4 text-sm text-white rounded ml-1 bg-blue-500 ease-in hover:bg-blue-800' onClick={search}>Search</button>
          </div>
        </form>
        <MapContainer key={`${cent[0]}${cent[1]}`} center={cent} zoom={14} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
          <Marker position={cent} draggable={true} animate={true}>
            <Popup>
              <h3 className='text-slate-900'>Hey you found me :</h3>
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default Map
