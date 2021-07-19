import './App.css';
import React from 'react';
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset, ThemeProvider} from '@material-ui/core/styles';
import Theme from './components/CustomTheme';
import SignIn from './components/SignIn';
import Info from './components/info';

// Configure JSS
const jss = create({
    plugins: [
        ...jssPreset().plugins,
        rtl()
    ]
});

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <StylesProvider jss={jss}>
                <div className="App">

                    <SignIn/>
                    <Info/>

                </div>
            </StylesProvider>
        </ThemeProvider>
    );
}

export default App;
