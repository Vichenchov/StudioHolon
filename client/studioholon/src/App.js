import React from 'react';
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset, ThemeProvider} from '@material-ui/core/styles';
import Theme from './components/CustomTheme';
import SignIn from './components/SignIn';
import Info from './components/Info/info';
import MainUpperBar from './components/MainUpperBar/MainUpperBar';
import Bottom from './components/BottomDesign/Bottom';
import WinnersDrawings from './components/WinnersDrawings/WinnersDrawings';
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
                    <Box className='Mainflexbox'>
                        <MainUpperBar/>
                        <Box className='nearbyComponents'>
                            <SignIn/>
                            <div className='vl'></div>
                            <Info/></Box>
                        <WinnersDrawings/>

                        <Bottom/>
                    </Box>
                </div>
            </StylesProvider>
        </ThemeProvider>
    );
}

export default App;
