import { useState } from "react";
import React from "react";
const  useToggle=(initialValue=false)=>{
    const[img,setimg]=useState(initialValue);
    const toggle=React.useCallback(()=>{
        setimg(v=>!v)
    },[])
    return [img,toggle]
}
export   {useToggle}