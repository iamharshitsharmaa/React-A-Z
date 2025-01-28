import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './index.scss'

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="app__page">
        <span className="tags top-tags"> &lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}
