import "./App.css"
import { ItemListContainter } from "./Titulo/Components/NavBar/ItemListContainer/ItemListContainer";
import { NavBar } from "./Titulo/Components/NavBar/NavBar";
import { Titulo } from "./Titulo/Titulo";

function App () {
    return (
        <>
        <Titulo/>
        <NavBar/>
        <ItemListContainter bienvenida="Bienvenidos a Nuestra Tienda de Ropa"/>
        </>
    )
}
export default App;