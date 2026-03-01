 import Header from "../components/header";
 import CardS from "../components/cards";
 import TodoContainer from "../components/todocontainer";
 import { useLocation } from "react-router-dom";

 function Landing() 
 {
    const data = useLocation()
    console.log(data.state.user)
    return(
       <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <Header username={data.state.user}/>
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <CardS bgColor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
            <CardS bgColor={"#FD6663"} title={"FEB 17"} subtitle={"17.02.2026"}/>
            <CardS bgColor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
          </div>
          <TodoContainer/>
         
        </div>
      </div>
    )
 }

 export default Landing;