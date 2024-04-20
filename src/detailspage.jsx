import './App.css'
import { useLocation,useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';

function Details(){
    const arnabadhikary=useNavigate();
const arnab=useLocation();
let [isloding,setislodind]=useState(false);

let [imgurl,setimgurl]=useState("");
let [title,settitle]=useState("");
let [disp,setdisp]=useState("");

console.log('navagated state data is',arnab.state);
//console.log(arnab.state.details_url);

var URL=arnab.state.details_url;

 async function details(){  
    setislodind(true);
    const response = await fetch(URL);
   // console.log(response);

    const convertedResponse = await response.json();
    console.log('url is',convertedResponse.photo.url);
    console.log(convertedResponse.photo.description);
    console.log(convertedResponse.photo.title);


    setimgurl(convertedResponse.photo.url);
    settitle(convertedResponse.photo.title);
    setdisp(convertedResponse.photo.description);


  setislodind(false)
    }

useEffect(()=>{details()},[])

function goback(){
arnabadhikary('/',{state:{previouscount:arnab.state.COUNT}});
 
}

    return(
        <>
        {isloding == true ? <h1>loding...</h1> : <div className='card'>
    <div className='photo'> <img src={imgurl} alt="slow interlet" />  </div>
    <div className='context'>
        <div className='heading'><h2>{title}</h2></div>
        <div className='subhading'><h4>{disp}</h4></div>
    </div>
</div> }

<div className='detalis_button'>
<button onClick={goback}>BACK</button>
</div>
</>
)
}

export default Details;