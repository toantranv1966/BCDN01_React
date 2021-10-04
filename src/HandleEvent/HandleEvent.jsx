import { Alert } from 'bootstrap'
import React, { Component } from 'react'

export default class HandleEvent extends Component {

    // Phương thức 
    testHandleEvent = () => {

        alert("Click rồi nè!");
        
    }

    showInfo = (name) => {
        alert(`Hello ${name}`);
        
    }
    
    



    render() {
        let name ="Toàn";

        return (
            <div className="container">
                {/* Gọi hàm không có tham số */}
                <button className="btn btn-warning py-3" onClick={this.testHandleEvent}>Click Me</button>
                {/* Truyền hàm có tham số */}
                <button className="btn btn-warning py-3 mb-5 mr-5" onClick={() => this.showInfo(name)}>Show Info</button>
                
            </div>
        )
    }
}
