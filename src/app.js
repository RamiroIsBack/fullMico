import React from "react"
import reactDOM from "react-dom"
import Home from "./components/layout/Home"
const root = document.getElementById("root");

class App extends React.Component {
   
    render(){
        return (
            <div class= "container fluid">
                Mucho MIIIIIICOOOO

                <Home/>

                
            </div>
        )
    }
}

reactDOM.render(<App/>,root)