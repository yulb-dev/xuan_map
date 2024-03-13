import Toolbar from '../Toolbar/index'
import { Form } from 'antd'

export default function MapSetting() {
  return (
    <div className="mapStting">
      <Form.Item
        label="图层"
        // name="图层"
        // rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Toolbar />
      </Form.Item>
    </div>
  )
}
