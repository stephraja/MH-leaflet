import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

const LeafletMap = ({beginPoints, destination}) => {
    return (
        <div>
            <MapContainer
            center={destination}
            zoom={7}
            scrollWheelZoom
            style={{ height: 1000, width: 1000 }}
            >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <>
                <Marker position={destination}>
                    <Popup>Destination</Popup>
                </Marker>
                {beginPoints.map((item, index) => {
                    return (
                        <div key={index}>
                            <Marker position={item}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                            <Polyline positions={[item, destination]} pathOptions={{ color: 'blue' }} />
                        </div>
                    )
                })}
            </>
            </MapContainer>
        </div>        
    )
}

export default LeafletMap