import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4C4C6D'
        }
    }
})

const useStyles = makeStyles({
    Button: {
        width: '20rem'
    }
});

export default function PurpleButton(props) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size='large'
                    className={classes.Button}>{props.label}</Button>
            </div>
        </ThemeProvider>
    );
}