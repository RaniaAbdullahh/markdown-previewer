// import { useState,useEffect } from "react"
import data from "./data.json"


const Docs = ()=>{


    // const docsHandler= ()=>{
   
    //     // const apiUrl = 'https://www.markdownguide.org/api/v1/basic-syntax.json';
    //   //   const response = await fetch(apiUrl,{
    //   //       method: "GET",
    //   //       mode: "no-cors",
    //   //   });
    //   //   console.log(1111,response.json())
    //   //   // const data = await response.json();
    //   //   // console.log("data : ", data.basic_syntax);
     
     
    //   }
    // useEffect(() => {
    //     docsHandler()
    // },[])
  
   return(
    <>
    {data.basic_syntax && data.basic_syntax.map(item=>{
        return(
            <div key={item.name} className="x">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3>Examples :</h3>
       
                <ul >{item.examples.map(ex=>{
                    return(
                        <>
                        <li>Markdown : {ex.markdown}</li>
                        <li>html : {ex.html}</li>
                        </>

                    )
                })}</ul>
            </div>
        )
    })}
    </>
    )

}
export default Docs;