import React, { Component } from 'react'

export default class Databinding extends Component {
    // Thuộc tính
    age = 20;
    img = "https://imgur.com/e5Zxf5M.jpg";

    renderProduct = () => {
        let product = {
            name: "Product 001",
            moTa: "Sản phẩm ...",
            price: 100,
            imgProduct: "https://imgur.com/e5Zxf5M.jpg"

        }

        return <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src= {product.imgProduct} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.moTa} <br></br>{product.price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    }


    render() {

        let name = "Nguyễn Thị Học Viên";

        return (

            <div className="container">
                <p>Tên học viên : {name} </p>
                <p>Tuổi học viên : {this.age}</p>
                <img src={this.img} alt="Hình" />
                {this.renderProduct()}
            </div>
        )
    }
}
