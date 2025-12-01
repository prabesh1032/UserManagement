import React from 'react'
import { Outlet, Navigate, Link } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'


export default function Defaultlayout() {

  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />
  }

  const onLogout = (e) => {
    e.preventDefault();
  }

  return (
    <div id='defaultLayout'>
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/user">User</Link>
      </aside>
      <div className='content'>
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout}  className="btn-logout" href="/logout">Logout</a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
