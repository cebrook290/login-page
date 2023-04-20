import React from "react"

export default class Navbar extends React.Component {
    render() {
       return <div class="container">
       <nav class="navbar navbar-expand-lg navbar-light">
         <a class="navbar-brand mb-0 h1">Legion of Doom</a>       
         <div class="navbar navbar-light">
           <ul class="navbar-nav mr-auto">
               <li class="nav-item">
                   <a class="nav-link" href="#">Contracts</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="#">About Us</a>
               </li>
             </ul>  
         </div>  
       </nav>
   </div>

    }
}