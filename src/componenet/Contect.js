import { Link, useLocation } from "react-router-dom";
function Contect() {
    const location=useLocation();
    console.log(location)
    console.warn("use location find to path in consol")
    return (
        <div>
            <h1>contect us </h1>
            <p>details about companys</p>
            <Link to="/Other"> Other</Link>
            {/* <Link to="/Error/anil" >employs</Link><br/> */}
        </div>
    )
}
export default Contect;