
import { Divider } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import { DropdownButton , Dropdown} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,} from 'chart.js'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );


export const Chart112 = () => {
 
  const data = {
    labels: ['09', '10', '11', '12', '13',14,15,16,17,18],
    datasets: [
      {
        data: [33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65],
        fill: false,
        borderColor:'green',
        tension: 0.4,
        pointBorderColor:'transparent',
    
      },
    ],
};

const options = {
  plugins :{
    legend : false
  },
  scales:{
    x : {
      grid : {
        display : false
      }
    },
    y : {
      grid :{
        display:false
      },
      ticks :{
        display:false,
      }
    }
   
  }
}

const databar = {
  labels: ['Older','Jan 01-08','Jan 09-16','Jan 17-24','Jan 25-31','Future'],
  datasets: [
    {
      data: [10, 70, 81, 81, 65,75],
      fill: false,
      borderColor:'green',
      backgroundColor:'green',
      tension: 0.4,
  
    },
  ],
};

  return(
    <>
    <div className='row justify-content-end ' style={{color:'gray', backgroundColor:'lightgray'}}>
        <div className='container row justify-content-end mt-5 ms-5 '>
        <div className='col-2'>
        </div>
            <div className="card col ">
                <div className=" col-lg-8 col-md-9 col-sm-12 position-relative rounded-pill">
                    <br/>
                    <span className='mt-4 fw-bold'> Checking Account</span>
                    <Dropdown className="d-inline  float-end">
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='ms-4 '>
                          January
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">January</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">February</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">March</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">April</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">May</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">June</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">July</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">August</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">September</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">October</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">November</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">December</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    <Dropdown className="d-inline  float-end " style={{alignItems:'flex-end'}}>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='ms-4 me-5'>
                          Manage
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Accounts</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Payroll</Dropdown.Item>
                            <Dropdown.Item href="#/action-3"> Reports</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Advisor</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Contacts</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        
                    <br/>
                    {/* <Divider className='bg-success ' variant="middle"  />
                    <Divider vertical/> */}
                    <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'700px',position:'absolute'}} />
                    <br/><br/>
                    <div style={{width:'710px' }}>
                    <Line data={data} options={options}/>
                    </div>
            </div>  
            </div >
            <div className='card col ms-5 me-5'>
                <div className='col-lg-8 col-md-9 col-sm-12'>
                    <br/>
                    <span className='mt-4 fw-bold '>Invoices owned to you</span>
                    <button className='btn btn-outline-light text-success fw-bold float-end'>New Sales Invoice</button>

                    <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'700px' }} />
                    <div style={{width:'700px' }}>
                      <Bar data={databar} options={options}/>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    
        
    </>
  );
}


