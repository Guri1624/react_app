import { Link } from "react-router-dom"
function Home(){
    return(
    <>
            <h1>hello</h1>
            <p>this is my first peragraph</p>
            <p>tht isn just a test</p>
            <Link to="/Rout2">go to second page</Link>
        </>
    )
    
}
export default Home;
