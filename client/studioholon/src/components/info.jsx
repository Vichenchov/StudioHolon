import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import './info.css';

const useStyles = makeStyles({
    Button: {
        size: 'medium',
        width: '20rem',
        backgroundColor: '#4C4C6D',
        '&:hover': {
            backgroundColor: '#4C4C6D'
        },
        display: 'block'
    }
})

export default function Info() {
    const classes = useStyles();
    return (
        <div className='info'>
            <h1>קצת עלינו...</h1>
            <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br/>
                dolore eu fugiat nulla pariatur.</label>
            <Button variant='contained' className={classes.Button} color='primary'>השארת פרטים</Button>
        </div>
    );
}