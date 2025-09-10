import React from "react";
import { redirect } from "react-router-dom";

const Square = (props)=>{
    

    return(
        <div onClick={props.onClick}
         style={{border:"1px solid",
         height:"200px",
         width:"100%",
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
    
         }} 
         className="sqaure">
            <h1>{props.value}</h1>
        </div>
    );
};
export default Square;