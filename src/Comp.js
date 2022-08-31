function Comp(Props)
{
    return (
        <div>
        
            <h1>{Props.data.name}</h1>
            <h1>{Props.data.email}</h1>
            <h1>{Props.data.contect}</h1>
        
        </div>
    )
}
export default Comp;