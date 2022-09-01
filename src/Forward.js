 import React,{forwardRef} from "react"
 function Forward(props,ref)
{
    return(
        <div>
            <input typr= "text"ref={ref}/>
        </div>
    )
}
export default forwardRef(Forward)