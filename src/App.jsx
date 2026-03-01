import Login from "./pages/login";
import{ useState } from "react";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App()
{
   const [User, setUser] = useState([
        {
            username: "siva",
            password: "sivasu"
        },
      {
        username:"ddd",
        password:"def"
      }])

  return(
     <div>
    <BrowserRouter>
   
    <Routes>
   <Route path="/" element={<Login user={User} setuser={setUser}/>}/>
   <Route path="/signup" element={<Signup user={User} setuser={setUser}/>}/>
   <Route path="/landing" element={<Landing/>}/>

   </Routes>
   </BrowserRouter>
  </div>)
}

export default App;

//
