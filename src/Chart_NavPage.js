import React from 'react';
import { Navbar, NavbarBrand } from "react-bootstrap";
// import { alignPropType } from 'react-bootstrap/esm/types';
// import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Face3Icon from '@mui/icons-material/Face3';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Chart_style_Page.css';

export const ChartNavPage=()=>
{
    return(
        <>
       
            <Navbar bg="light" expand="lg">
                <div className='sear'  >
                    <label className='sear form-label' ></label>
                    <input type='search' className='form-control' /><SearchIcon className='ms-1'></SearchIcon>  
                    <label className=''></label>
                    <NotificationsIcon className='ms-5'></NotificationsIcon> 
                    <Face3Icon className='ms-5'></Face3Icon>
                    <ArrowDropDownIcon className='ms-5'></ArrowDropDownIcon>
             
                    <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img 
          
          />
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>

                </div>

                <NavbarBrand className=' ' type='search'> </NavbarBrand>

            </Navbar>
        </>
    );
}


