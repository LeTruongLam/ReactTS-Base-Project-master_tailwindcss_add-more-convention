import { Outlet } from 'react-router-dom'

import Header from './header'
import Sidebar from './sidebar'

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
