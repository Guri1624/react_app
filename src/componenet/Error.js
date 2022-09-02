import { useParams } from "react-router-dom";
function Error()
{
    const params=useParams();
    const {name}=params;
    console.warn(name);
    return(
        <div>
        <h1>this is {name} page</h1>

        </div>
    )
}
export default Error;