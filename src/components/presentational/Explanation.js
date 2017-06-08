import React from "react"

export default class Explanation extends React.Component {
    constructor(args) {
        super()
        // code
    }
    // methods
    render(){
        return(
            <div class = "container" >
                <div>{this.props.propiedades.calle}</div><br/>
                
                 <div>{this.props.propiedades.fecha} </div>
                <hr/>
            </div>
            
        )
    }
}