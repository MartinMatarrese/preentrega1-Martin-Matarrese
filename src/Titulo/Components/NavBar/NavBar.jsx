import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
       <nav className="menu">
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">REMERAS</a></li>
            <li><a href="#">PANTALONES/SHORTS</a></li>
            <li><a href="#">CAMPERAS</a></li>
            <li><a href="#">BUZOS</a></li>
            <li><a href="#">CONTACTO</a></li>
           </ul>
           <CartWidget/>
       </nav>
    );
}