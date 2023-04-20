import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const favSeries ='netflix';

const FavS=()=>{


if(favSeries === 'netflix'){
    return(

        <Card
        imgsrc={Sdatas[1].imgsrc}
        title={Sdatas[1].title}
        sname={Sdatas[1].sname}
        link={Sdatas[1].link} 
       />  
     );
}else{
    return(

        <Card
        imgsrc={Sdatas[1].imgsrc}
        title={Sdatas[1].title}
        sname={Sdatas[1].sname}
        link={Sdatas[1].link} 
       />  
     );
}
};
const App=()=>(
    <>
    <h1 className="heading_style">List of Top 5 Netflix Series Of 2023</h1>
    
        
        <FavS/>
    </>
);
export default App;
