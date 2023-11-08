import React from 'react';
import { Navbar, NavbarBrand } from "react-bootstrap";
import { alignPropType } from 'react-bootstrap/esm/types';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Chart_style_Page.css';

export const ChartNavPage=()=>
{
    return(
        <>
       
            <Navbar bg="light" expand="lg">
                <div className='sear'  >
                    <label className='sear'></label>
                    <input type='search' className='' /><SearchIcon className='ms-1'></SearchIcon>  
                    <label className='notify'></label>
                    <NotificationsIcon></NotificationsIcon> 
                </div>

                <NavbarBrand className=' ' type='search'> </NavbarBrand>

            </Navbar>
        </>
    );
}


