import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { HomePage } from "../../zohoproject/src/1_Task_Navbar";
import { ListPage1 } from "../../zohoproject/src/1_Task_ListDetails";
import { Home1 } from '../../zohoproject/src/1_Task_Home';
import {  ChartSiderBar } from './ChartPage';
import Navbar, { ChartNavPage } from './Chart_NavPage';




function App() {
  return(
    <>
   
    <ChartNavPage/>
  
    <ChartSiderBar/>
    </>
  );
}

export default App;
