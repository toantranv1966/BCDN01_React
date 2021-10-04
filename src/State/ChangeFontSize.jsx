import React, { Component } from 'react'

export default class ChangeFontSize extends Component {

    state={
        fs: 16
    }

    render() {
        return (
            <div className="container">
                <p style={{fontSize:`${this.state.fs}px`}} className="bg-dark text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success" onClick={() => {
                        this.setState({
                            fs: this.state.fs + 2
                        })
                    }}>+</button>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        this.setState({
                            fs: this.state.fs -2
                        })
                    }}>-</button>
                    
                </div>


            </div>
        )
    }
}
