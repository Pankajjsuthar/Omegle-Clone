import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const [naam,setNaam] = useState("");
    const navigate = useNavigate();
    return <div>
        <input type="text" onChange={(e)=>{
            setNaam(e.target.value);
        }}/>
        <button onClick={(e)=>{
            e.preventDefault();
            navigate(`/room/?name=${naam}`)
            //join room logic here where people suffle and meet each other.
        }}>Join</button>
    </div>
}