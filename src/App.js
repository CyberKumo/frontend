import './App.css';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory/>}/>
        <Route path='/womens' element={<ShopCategory/>}/>
        <Route path='/kids' element={<ShopCategory/>}/>



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
