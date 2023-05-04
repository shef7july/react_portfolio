import { Router,Routes,Route } from "react-router-dom";
import Home from "../Screens/Home";
import Skills from "../Screens/Skills";
import Expirence from "../Screens/Expirence";
import Education from "../Screens/Education";


function Routing(){
    return(

    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Expirence" element={<Expirence/>} />
      <Route path="/Education" element={<Education/>} />
    </Routes>
  



    );

}
export default Routing;