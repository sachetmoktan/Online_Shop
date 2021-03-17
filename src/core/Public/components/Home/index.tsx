import React,{  useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect, ConnectedProps } from 'react-redux';
import { GetAllProductAction } from "store/modules/product/getAllProduct";
import { addToCart } from "store/modules/cart/actions";
import initialState from "store/helper/default-state";
import { RootState } from 'store/root-reducer';

import user from '../../../../assets/images/Sunset_&_Tea_Garden.jpg';


const Home = ({ getProductList, productList, addToCart, counter }) => {

    const ProductList = useCallback(
        () => {
            getProductList();
        },
        [getProductList]
    )


    useEffect( () => {
        ProductList()
    }, [ProductList])

    console.log(productList,"productList")

    return (
        <>
            <nav className="navbar navbar-expand-md bg-light navbar-light my-3 font-weight-bold">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart"></i>Shopping Cart  ({counter}) </Link></li>
                        </ul>
                    </div>  
                </div>
            </nav>   

            {/* <section className="py-5">
                <div className="container">
                    <div className="row">
                            <div className="col-md-4 mb-5 text-center">
                                <i className="fab fa-cc-visa fa-3x mb-2"></i>
                                <h3>FAST SECURE PAYMENT</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, deserunt!</p>
                            </div>
                            <div className="col-md-4 mb-4 text-center">
                                <i className="fas fa-gift fa-3x mb-2"></i>
                                <h3>PREMIUM PRODUCT</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, deserunt!</p>
                            </div>
                            <div className="col-md-4 mb-4 text-center">
                                <i className="fas fa-truck fa-3x mb-2"></i>
                                <h3>FREE & FAST DELIVERY</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, deserunt!</p>
                            </div>
                    </div>
                </div> 
            </section>   */}

            <div className="container">

                <div className="text-center mb-5">
                    <h1 className="text-info">TOP SELLING PRODUCTS</h1>
                    <hr style={{height:"2px",border:"none",color:"#17a2b8",background:"#17a2b8"}} />
                </div>
                    

                <div className="row">
                    { productList?.data && productList?.data?.data.length > 0 && productList?.data?.data.map(
                        (product, index)  => (
                            <div className="col-lg-3 col-md-6 mb-5">
                                <div className="card">
                                    <img src={user} alt="" className="card-img-top" />
                                    <div className="d-flex jusify-content-center">
                                            <div className="p-4 mr-auto">
                                                <button type='button' className="btn btn-danger" onClick={() => {
                                                    addToCart(product)
                                                    // toast.success("Product added to cart")
                                                }}><i className="fas fa-shopping-bag"></i><span> ADD TO CART</span>
                                                </button>
                                            </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="justify-content-center">
                                            {/* <h6>Nrs.5000</h6> */}
                                            {/* <p>Description of Dress</p> */}
                                            <h4 className="card-title">{product.name}</h4>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text">Rating Average: {product.ratingAverage}</p>
                                            <p className="card-text">Price: Rs {product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                   
                        )
                    )}
                </div> 

            </div>

        </>

    )
}

const mapStateToProps = (state: any) => ({
    productList: state.getAllProduct,
    counter: state.cart.items.reduce((acc, cartItem) => acc + cartItem.quantity, 0) || 0
 })
 const mapDispatchToProps = {
     getProductList: GetAllProductAction,
     addToCart
 }
 const connector = connect(mapStateToProps, mapDispatchToProps);
 type PropsFromRedux = ConnectedProps<typeof connector>
 export default connector(Home);

