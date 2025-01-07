import React from 'react'
import '..//node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <nav className="navbar bg-primary  container-fluid nv" data-bs-theme="dark">
  <div className="container-fluid  left ">
            <a class="navbar-brand" href="#">
            <div className='tt' > <i class="bi bi-back"></i>
            <h5>Mohammed Shoaib <span><a class="bl1" href=""> / Front end Developer</a> </span></h5>  </div>
            </a>
        </div>

              <div>


                <ul class=" rt container-fluid nav  ">
        <li class="nav-item">
            <Link to ="/" class="nav-link "> About me </Link>
        </li>
        <li class="nav-item">
        <Link to ="/Resume" class="nav-link "> Resume </Link>

        </li>
        <li class="nav-item">
                       <Link to ="/Projects" class="nav-link "> Projects </Link>

        </li>
        <li class="nav-item">
        <Link to ="/Contact" class="nav-link "> Contact </Link>

        </li>
        </ul>
              </div>


        

</nav>
  )
}

export default Nav