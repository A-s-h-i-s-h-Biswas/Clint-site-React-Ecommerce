
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carts from "./pages/Carts";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Succes from "./pages/Succes";
import {useSelector} from "react-redux";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate ,
  Link
} from "react-router-dom";



const App = () => {
  // const user=false;
  const user = useSelector((state) => state.user.currentUser);
  
  return(
   <Router>
    
    <Routes>
      <Route exact path="/" element={  <Home/> } />
    </Routes>
    <Routes>
      <Route exact path="/products/:category" element={<ProductList/>} />
    </Routes>
    <Routes>
      <Route exact path="/product/:id" element={<Product/>} />
    </Routes>
    <Routes>
      <Route exact path="/carts" element={ <Carts/>}  />
    </Routes>
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" />:<Signin/>}/>
    </Routes>
    <Routes>
    <Route path="/register" element={user ? <Navigate to="/" />:<Register/>}/>
    </Routes>
    <Routes>
    <Route path="/success" element={<Succes/>}/>
    </Routes>
   </Router>
  );
};

export default App;



