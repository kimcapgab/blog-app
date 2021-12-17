
import Navbar from "../Navbar/Navbar"

export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  )
  
}