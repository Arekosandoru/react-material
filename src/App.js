import React, { Component } from "react";

import createMuiTheme from "material-ui/styles/createMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Navbar from "./features/Navbar/Navbar";
import Example from "./features/Example/Example";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000"
        }
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Navbar />
                    <Example />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
