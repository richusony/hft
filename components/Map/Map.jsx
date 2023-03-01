import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const Map = () => {
  const cent=[12.859324, 74.846866]
  return (
    <MapContainer center={cent} zoom={14} scrollWheelZoom={false} style={{height: "90%", width: "100%"}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
      <Marker 
      position={cent}
      draggable={true}
      animate={true}
      >
        <Popup>
          <h3 className='text-slate-900'>Hey you found me :)</h3>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map