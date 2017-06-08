import React from "react"
import Explanation from "../presentational/Explanation"
import styles from "./styles"
export default class ExplanationContainer extends React.Component {
    constructor(args) {
        super()
        this.state = {
            list : [
                {calle : "hooohh soy una explicación que lo flipas de la calle donde será la feria",
                    fecha: "12/3/2020"},
                {calle : "mucha calle veo yo aqui",
                    fecha: "12/3/2099"}
            ]

        }
    }
    // methods
    render(){
        const estiloExplanationList = styles.explanation
        const explanationList =
        this.state.list.map((explanation,i)=>{
            return(
                <div><Explanation propiedades ={explanation}/></div>
            )
        })
        return(
            <div>
                <h3>En que consite la feria exantamente :</h3>
                <div style = {estiloExplanationList.container}>
                    <div>
                        {explanationList}
                    </div>
                </div>
            </div>
        )
    }
}