import React,{useState} from "react";

export default function Accordionlist(props) {
  const [show,setshow] = useState(true)
  return (
    <>
    <div className="main-heading">
      <button onClick={()=>{setshow(!show)}}>{show?"-":"+"}<h3>{props.name}</h3></button>
      
      {show && <p>{props.description}</p>}
    </div>
    </>
  );
}
