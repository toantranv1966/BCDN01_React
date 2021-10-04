import React, { Component } from 'react'

export default class StateDemo extends Component {
    /**
     * Thuộc tính
     */
   
    // isLogin = false;
    userName = "HV001";

    /**
     * 
     * State :
     * - là thuộc tính có sẵn của react class component
     * Công dụng: setState
     *  + Gán lại giá trị cho thuộc tính
     *  + Chạy lại phương thức render
     * 
     */
    // Đối tượng ban đầu
    state = {
        isLogin: false
    }

    renderLogin = () => {
            if(this.state.isLogin){
                return <span className="text-white">{this.userName}</span>
            }
                return <button className="btn btn-success" onClick={()=>this.handleLogin()}>Login</button>
    }

    handleLogin = async () => {
        let newState = {
            isLogin: true
        }
        // setState() là hàm bất đồng bộ nên ở đây this.setState(newState); chờ để setState nên browse thực hiện console.log(this.state.isLogin); lúc này isLogin : false.
        // ! Programmer phải xử lý vấn đề bất đồng bộ => sử dụng Callback Function : là một hàm làm tham số của một hàm
        // anfn : tạo hàm Arrow Function
        // this.setState(newState,() => {
        //     console.log(this.state.isLogin);
        // });
        // Cách viết gọn code
        // this.setState({isLogin: true}, () => {
        //     console.log(this.state.isLogin);
        // })

        await this.setState(newState);
        console.log(this.state.isLogin);


        
    }
    
    
// Phương thức render chỉ chạy một lần & không chạy lại
    render() {
        
        return (
            <div className="container">
                <h1>State Demo</h1>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {this.renderLogin()}
                    {/* Nội dung Login */}
                    {/* Nếu isLogin === true hiện userName , ngược lại hiện button Login */}
                    {/* {this.isLogin === true ? <span className="text-white">{this.userName}</span> : <button className="btn btn-success">Login</button>} */}
                    {/* {this.isLogin ? <span className="text-white">{this.userName}</span> : <button className="btn btn-success">Login</button>} */}
                    
                </nav>

                

            </div>
        )
    }
}
