import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

export default function GuestLayout() {
  const { user, token } = useStateContext();

  if (token) {
    return <Navigate to="/user" />
  }

  return (
    <div>
      <div>For Guest User</div>
      <Outlet />
    </div>
  )
}