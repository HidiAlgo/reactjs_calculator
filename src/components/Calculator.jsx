import React, { Component } from 'react'
import Display from './Display'
import Buttons from './Buttons'
import Operations from './Operations'

import './Calculator.css'

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayResult: ""
        }

        this.clearme = this.clearme.bind(this)
    }

    render() {
        return (
            <div className="calculator">
                <Display result={this.state.displayResult} />
                <table className="buttonBox">
                    <tbody >
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <Buttons appendMethod={this.append} clearMethod={this.clearme} />
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                        <Operations />
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        )
    }

    append = (newValue) => {
        this.setState((prevState) => {
            return {
                displayResult: prevState.displayResult + newValue
            }
        })
    }

    clearme() {
        this.setState({
            displayResult: ""
        })
    }
}


export default Calculator
