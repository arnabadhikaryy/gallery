import { useState,useEffect } from "react";
import { useNavigate,useLocation} from 'react-router-dom';
import "./App.css"
function Homegallery(){

    const arnab=useNavigate();
    const location=useLocation();
    //console.log('previous count is',location.state.previouscount)

    let[loding,setloding]=useState(false);
    let [final_new_array,set_final_new_array]=useState([]);
   // let [count,setcount]=useState(0);



   if(location.state != null){
    console.log('navigated previous count is',location.state.previouscount)
    var [count,setcount]=useState(location.state.previouscount);
}else{var [count,setcount]=useState(0);}



    let [url,seturl]=useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${count}&limit=20`)

    async function datafatch(){
setloding(true);
        let data=await fetch(url);
console.log(data);
let jsondata=await data.json();
console.log(jsondata.photos);
let fuk=jsondata.photos;

set_final_new_array(fuk.map((index)=>{return({"URL":index.url,"ID":index.id})}))
  
console.log("final new array is ",final_new_array)
setloding(false);
    }
//datafatch();

useEffect(()=>{datafatch()},[url]);
useEffect(()=>{console.log(final_new_array)},[final_new_array])

function addcount(){
    setcount(count=count+20);
    console.log('count is',count);
    seturl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${count}&limit=20`)
}

function removecount(){
    setcount(count=count-20);
    console.log('count is',count);
    seturl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${count}&limit=20`)
}


function navigett(id){
    arnab("/details",{state:{details_url:`https://api.slingacademy.com/v1/sample-data/photos/${id}`,COUNT:count}});
}

    return(
        <>
        {loding ? (
        <h1>Loding...</h1>
      ) :
      <div>
           <div className="homePic"> {final_new_array.map((index)=>(<div key={index.id}> <img id={index.ID} src={index.URL} onClick={()=>{navigett(index.ID)}}/> </div>))} </div>
           <div className="fut_but">
           {count==0?(<button>------</button>): <button onClick={removecount}>previous</button>}
           {count==120?(<button>------</button>): <button onClick={addcount}>next</button>}
            </div>
     </div>
}
        </>
    )
}


export default Homegallery;