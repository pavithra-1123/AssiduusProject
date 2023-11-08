import React from 'react';
import './Chart_style_Page.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';

export const ChartSiderBar=()=>
{
    return(
        <>
        <div className="sidebar col-lg-8 col-md-10 col-sm-12"  >
           <div className=''>
           <h2 className='ms-4'>ASSIDUUS</h2>
            <ul className='ulside'>
                <li className='ms-3'><DashboardIcon className='me-3'></DashboardIcon>Dashboard</li>
                <li className='ms-3'><AccountBalanceWalletIcon className='me-3'></AccountBalanceWalletIcon>Accounts</li>
                <li className='ms-3'><AttachMoneyIcon className='me-3'></AttachMoneyIcon>Payroll</li>
                <li className='ms-3'><DescriptionIcon className='me-3'></DescriptionIcon> Reports</li>
                <li className='ms-3'><PersonIcon className='me-3'></PersonIcon> Advisor</li>
                <li className='ms-3'><ContactsIcon className='me-3'></ContactsIcon> Contacts</li>
            </ul>

           </div>
        </div>
        </>

    );

}


