import { useEffect, useState } from "react";

const useOnlineStatus =()=>{
    const [onlinestate,setonlinestate]=useState(true)

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestate(false)
    
        })
        window.addEventListener("online",()=>{
            setonlinestate(true)
    
        })
    },[])

   
    return onlinestate;
}

export default useOnlineStatus;