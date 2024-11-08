import Navbar from "./components/Navbar/Navbar"
import {Routes , Route} from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import Placeholder from "./pages/Placeholder/Placeholder"

function App() {
  
  return (
  <>
   <div>
   <Navbar />
   <Routes>
      <Route path="/" elements={<Home/>}/>
      <Route path="/cart" elements={<Cart/>}/>
      <Route path="/placeholder" elements={<Placeholder/>}/>

   </Routes>
   </div>
  </>
  )
}

export default App
