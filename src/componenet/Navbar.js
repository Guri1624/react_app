import { Link ,NavLink} from "react-router-dom"
function Navbar() {
    return (
        <div>
            <ul className="newnev">
            <li><NavLink
            style={({isActive})=>{ return {backgroundColor :isActive ?'green':'red'}}}
            className="nav-link" to="/home">home !</NavLink></li>
            <li><NavLink 
            style={({isActive})=>{ return {backgroundColor :isActive ?'green':'red'}}}
            to="/rout2" className="nav-link">rout2 !</NavLink></li>
            <li>  <NavLink
            style={({isActive})=>{ return {backgroundColor :isActive ?'green':'red'}}} 
            to="/Error/anil" className="nav-link" >anil!</NavLink></li>
            <li> <NavLink 
            style={({isActive})=>{ return {backgroundColor :isActive ?'green':'red'}}}
            to="/Error/peter" className="nav-link">peter</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;