import './App.css';
// import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Register from './routes/Register';
import Cards from './routes/Cards';
import Sidebar from './routes/Sidebar';
import Video1 from './routes/Video1';
import Lesson1 from './routes/Lesson1';
import Lesson2 from './routes/Lesson2';
import Lesson3 from './routes/Lesson3';
import Lesson4 from './routes/Lesson4.js';
import Lesson5 from './routes/Lesson5';
import Product from './routes/Product';
import Home2 from './routes/Home2';

import Descriptions from './routes/Descriptions';
// import Cvideo from './routes/Cvideo'
import Assignments from "./routes/Assignments";
import Assignment2 from "./routes/Assignment2";
import Display from "./routes/Display";
import Counter from './components/Counter';
import CreateCourse from './routes/CreateCourse';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Display' element={<Display/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/video1' element={<Video1/>}/>
        <Route path='/des' element={<Descriptions/>}/>
        <Route path='/ass' element={<Assignments/>}/>
        <Route path='/ass2' element={<Assignment2/>}/>
        <Route path='/Lesson1' element={<Lesson1/>}/>
        <Route path='/Lesson2' element={<Lesson2/>}/>
        <Route path='/Lesson3' element={<Lesson3/>}/>
        <Route path='/Lesson4' element={<Lesson4/>}/>
        <Route path='/Lesson5' element={<Lesson5/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/Counter' element={<Counter/>}/>       
        <Route path='/cc' element={<CreateCourse/>}/>
        <Route path='/Home2' element={<Home2/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
