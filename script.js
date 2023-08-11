let score=0;
let wicket=0;
let ballwise=[];
let hit=0;
let inputRef=React.createRef();
// function oneClick(){
//     score+=1;
//     ReactDOM.render(<App/>,document.getElementById("root"));
function addnum(num)
{
    if(num== 6)
    {
        alert("Its A six!!")
    }
    if(wicket<10)
    {
        hit=num;
        // ballwise.push(num);
        // score += num;
        ReactDOM.render(<App/>,document.getElementById("root"));
       // console.log(ballwise)
    }
    
}
function wicketClick(){
    if(wicket <10)
    {
        hit="W";
        // ballwise.push("W");
        // wicket+=1;
        ReactDOM.render(<App/>,document.getElementById("root"));
        // console.log(ballwise)
    }
    if(wicket==10)
    {
        alert("All Out !!")
    }
}
const Scorebutton = () =>
(
    <div>
        <button onClick ={()=>{addnum(0)}}>0</button>
        <button onClick={() =>{addnum(1)}}>1</button>
        <button onClick={() =>{addnum(2)}} >2</button>
        <button onClick={()=>{addnum(3)}}>3</button>
        <button onClick={()=>{addnum(4)}}>4</button>
        <button onClick={()=>{addnum(5)}}>5</button>
        <button onClick={()=>{addnum(6)}}>6</button>
        <button  onClick={wicketClick}>Wicket</button>
    </div>
)
const Result=()=>(
    <div>
       {
        ballwise.map((res,index) =>(
            <>
            {index %6===0? <br/> :null}
            <span key={index}>{res===0?<strong>.</strong>:res}</span>&nbsp;&nbsp;&nbsp;
            </> ))
       }
       
    </div>
)
function handelsubmit(event) {
    event.preventDefault();
    if(hit=="W")
    {
        wicket+=1;
    }
    else{
        score+=hit;
    }
    console.log(inputRef.current.value)
    ballwise.unshift(
        <span>{`${hit}, ${inputRef.current.value}`}</span>
    );
    hit=0;
    inputRef.current.value="";

    ReactDOM.render(<App/>,document.getElementById("root"));
}
const Form =() =>(
    <form onSubmit = {handelsubmit}> 
        <input value={hit}/>
        <input ref={inputRef} placeholder="Add Comment"/>
        <button>Submit</button>
    </form>
    

)

const App = () =>
(
    <>
        <h1>Score Keeper</h1>
        <h2>Score: {score}/{wicket}</h2>
        <Scorebutton/>
        <br/>
        <Form/>
        <hr />
        {ballwise.map((res,index)=>(
            <p key={index}>{res}</p>
        ))}
    </>
 )
ReactDOM.render(<App/>,document.getElementById("root"));