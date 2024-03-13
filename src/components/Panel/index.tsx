import './index.scss'
import { Card, Tabs } from 'antd'
import MapSetting from '../MapSetting/index'

export default function Panel() {
  const TabList = [
    { label: '新建', key: '1', children: <div>新建</div> },
    { label: '地图设置', key: '2', children: <MapSetting /> },
    // { label: '新建', children: <div>nihao</div> },
  ]
  //   const TabItems =
  function handleChange(data) {
    console.log('data', data)
  }

  return (
    <Card style={{ width: 300 }} className="panel">
      <Tabs onChange={handleChange} type="card" items={TabList} />
    </Card>
  )
}
