import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { HomePage } from "./1_Task_Navbar";
import { ListPage1 } from "./1_Task_ListDetails";
import { Home1 } from './1_Task_Home';



function App() {
  return(
    <>
    <BrowserRouter>
    <HomePage/>
    <Routes>
      <Route path='Home1' exact element={<Home1/>} />
      <Route path='list1' exact element={<ListPage1/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
