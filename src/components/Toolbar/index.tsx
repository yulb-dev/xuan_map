import { useAMap, useMap } from '@/contexts/AMapContext'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import { Segmented } from 'antd'

const MapTypeOptions = [
  { label: '标准图层', value: 0 },
  { label: '卫星图', value: 1 },
]

export default function Toolbar() {
  const [value, setValue] = useState<number>(0)

  const AMap = useAMap()
  const map = useMap()
  const self = useRef<any>()

  function createMapType(value: number) {
    self.current && self.current.remove()
    const type = new AMap.current.MapType({
      defaultType: value,
    })
    type.hide()
    map.current.addControl(type)
    return type
  }

  function handleChange(value: number) {
    self.current = createMapType(value)
    setValue(value)
  }

  useEffect(() => {
    self.current = createMapType(value)
    return () => self.current.remove()
  }, [])

  return (
    <Segmented options={MapTypeOptions} value={value} onChange={handleChange} />
  )
}
