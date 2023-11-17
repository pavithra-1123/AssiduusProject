
// import { Chart } from 'chart.js/dist';
import {  ChartSiderBar } from './ChartPage';
import  { ChartNavPage } from './Chart_NavPage';
import { My_Chartpage} from './Chart_line';

import {BrowserRouter, Route, Routes} from 'react-router-dom'


export function App() {
  return(
    <>
    <BrowserRouter>
    <ChartNavPage/>
    <ChartSiderBar/>
      <Routes>
        <Route path='view' exact element={<My_Chartpage/>} />
        
      </Routes>
      </BrowserRouter>
 
   
   
    </>
  );
}


