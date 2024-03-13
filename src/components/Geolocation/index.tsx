import { useAMap, useMap } from '@/contexts/AMapContext'
import { useEffect, useRef } from 'react'

export default function Geolocation() {
  const AMap = useAMap()
  const map = useMap()
  const self = useRef<any>()

  function handleCurrentPosition(data: any) {
    console.log('data', data)
  }
  useEffect(() => {
    const geolocation = new AMap.current.Geolocation({
      enableHighAccuracy: true,
      panToLocation: true,
      timeout: 10000,
      offset: [10, 20],
      zoomToAccuracy: true,
      position: 'RB',
    })
    self.current = geolocation
    geolocation.getCurrentPosition(function (status: any, result: any) {
      if (status == 'complete') {
        handleCurrentPosition(result)
      } else {
        handleCurrentPosition(result)
      }
    })
    geolocation.hide()
    map.current.addControl(geolocation)
    // map.current.remove(geolocation)
    return () => geolocation.remove()
  }, [])
  return null
}
