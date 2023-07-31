import { useState } from "react";

function ShowHide(){
    const[show,setShow]=useState(false);

    const handleCLick= (event) =>{
        setShow(!show);
    }

    return(
    <div>
        <button onClick={handleCLick}>{show ? "Hide":"Show"} Text!!</button>
        {show && <h2>HIDE ME!!</h2>}
    </div>);
}
export default ShowHide;