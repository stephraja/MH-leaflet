import LeafletMap from './components/LeafletMap'

import "./App.css"
import "leaflet/dist/leaflet.css"
import 'antd/dist/antd.css'


const App = () => {
  const beginPoints = [
    [43.529742, 5.447427], [43.610769, 3.876716], [43.604652, 1.444209], [48.856614, 2.352222], [48.692054, 6.184417] // position is used as [latitude, longitude]
  ]
  const destination = [45.764043, 4.835659]

  return (
    <>
      <div className="App">
        <div>
          <LeafletMap beginPoints={beginPoints} destination={destination} />
        </div>
      </div>
    </>
  );
};

export default App;
