import Navbar from "../Navbar/Navbar"
import './Layout.css'
export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-children">
        {props.children}
      </div>
      <p>Delete this </p>
    </div>
  )
  
}