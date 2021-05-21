import React, { Fragment, useEffect, useState } from "react";

const fileImporter = () => {



    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        {
            setTimeout(()=>{
                setIsLoading(false)
            },1500)
        }
    })
    return (
        <>
            {isLoading ?
                <div style={{width:"100vw",height:"100vh",textAlign: "center", verticalAlign:"middle",backgroundColor:"#00cccc99",position:"absolute", display:"table-cell",top:0}}>
                    <img src="./loading.gif" style={{alignSelf:"center", marginLeft:"auto", marginRight:"auto"}} />
                </div>
                :
                <div style={{width:"100vw",height:"100vh",textAlign: "center", verticalAlign:"middle",backgroundColor:"#00cccc99",position:"absolute", display:"table-cell",top:0}}>

                    <input type="text" onChange={(evt) => {
                        setInputText(evt.target.value)
                    }} />
                    {inputText}
                </div>
            }
        </>
    )
}

export default fileImporter;