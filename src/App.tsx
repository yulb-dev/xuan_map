import { useState } from 'react'
import Geolocation from './components/Geolocation/index'
import MapContainer from './components/MapContainer/MapContainer'
import { MarkerType, useMarkersComponent } from './components/Marker'
import Panel from './components/Panel/index'
import Toolbar from './components/Toolbar'

const Markers: MarkerType[] = [
  {
    type: 'marker',
    position: [116.497428, 39.90923],
    extData: { id: '222', type: 'marker' },
  },
  {
    type: 'marker',
    position: [116.397428, 39.90923],
    extData: { id: '223', type: 'marker' },
  },
]

function App() {
  const [MarkerList, setMarkerList] = useState(Markers)
  const MarkersComponent = useMarkersComponent(MarkerList, setMarkerList)
  return (
    <>
      <MapContainer>
        {MarkersComponent}
        {/* <Toolbar /> */}
        <Geolocation />
        <Panel />
      </MapContainer>
    </>
  )
}

export default App
