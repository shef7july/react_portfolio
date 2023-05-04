import { useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css"
function Navbar(){
   const navigate=useNavigate()
    return(
<>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" style={{cursor:"pointer"  }} onClick={()=>navigate('/')}>Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{backgroundColor:'yellow'}}>
            <div class="navbar-nav">
              <a class={`nav-link  ${window.location.href.includes('Home') ? 'active' : ""} ` } style={{cursor:"pointer"  , fontWeight:"bold", color :window.location.href.includes('Home') ? 'green' : 'black' }} aria-current="page" onClick={()=>navigate('/Home')}>Home</a>
              <a class={`nav-link  ${window.location.href.includes('Skills') ? 'active' : ""} ` } style={{cursor:"pointer" , fontWeight:"bold", color :window.location.href.includes('Skills') ? 'green' : 'black'}} onClick={()=>navigate('/Skills')}>Skills</a>
              <a class={`nav-link  ${window.location.href.includes('Expirence') ? 'active' : ""} ` } style={{cursor:"pointer"  , fontWeight:"bold", color :window.location.href.includes('Expirence') ? 'green' : 'black' }} aria-current="page" onClick={()=>navigate('/Expirence')}>Expirence</a>
              <a class={`nav-link  ${window.location.href.includes('Education') ? 'active' : ""} ` } style={{cursor:"pointer" , fontWeight:"bold", color :window.location.href.includes('Education') ? 'green' : 'black'}} onClick={()=>navigate('/Education')}>Education</a>
           
            
            </div>
          </div>
        </div>
      </nav>
</>
    );

}
export default Navbar