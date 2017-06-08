import React from "react"
import FeriasContainer from "../containers/FeriasContainer"
import ExplanationContainer from "../containers/ExplanationContainer"

export default class Home extends React.Component {
    constructor(args) {
        super()
        // code
    }
    // methods
    render(){
        return(
            <div class = "container">
                <div class= "row">
                    <div class= "col-xs-6 col-sm-4 col-lg-3">
                        <FeriasContainer/>
                    </div>
                    <div class= "col-xs-6 col-sm-8 col-lg-9">
                        <ExplanationContainer/>
                    </div>
                </div>
            </div>
        )
    }
}