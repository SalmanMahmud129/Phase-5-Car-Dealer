import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { SmileOutlined} from '@ant-design/icons'
import { Result, Button } from 'antd'


function LogoutScreen() {
  const navigate = useNavigate()
  function handleClick(){
    navigate('/')
  }
  return (
    <Result
    icon={<SmileOutlined />}
    title="Successfully logged out!"
    extra={<Button onClick={handleClick} type="primary" >Home</Button>}/>
    // <div>Successfully logged out! Return <NavLink to="/">Home</NavLink> </div>
  )
}

export default LogoutScreen