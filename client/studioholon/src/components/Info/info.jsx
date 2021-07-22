import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import './info.css';
import PurpleButton from '../PurpleButton';

export default function Info() {
    return (
        <div className='info'>
            <h1>קצת עלינו...</h1>
            <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br/>
                dolore eu fugiat nulla pariatur.</label>
            <PurpleButton
                variant='contained'
                size='large'
                label='השארת פרטים'
                color='primary'></PurpleButton>
        </div>
    );
}