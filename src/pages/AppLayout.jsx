import Navbar from "../components/Navbar"
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div>
      <Navbar />
        <Outlet />
    </div>
  )
}

export default AppLayout
