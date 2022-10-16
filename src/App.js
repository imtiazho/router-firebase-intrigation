import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequirAuth from './Components/RequirAuth/RequirAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/products" element={<Products></Products>}/>
        <Route path="/orders" element={
          <RequirAuth>
            <Orders></Orders>
          </RequirAuth>
        }/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/login" element={<Login></Login>}/>
      </Routes>
    </div>
  );
}

export default App;
