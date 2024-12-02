import React, { useState } from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri';
// import productsData from '../Data/ProductsData'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/addCartReducer';
import { BsFillCartXFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Cart = () => {
  const cartList = useSelector(state => state.cartData);
  // const [{quantity}] = cartList
  // console.log(quantity);
  
  // const [totalItems, setTotalItems] = useState(quantity)
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(remove(id));
  }

  // const decrementQuantity = () => {
  //   setTotalItems(quantity-1)
  // }

  // const incrementQuantity = () => {
  //   setTotalItems(quantity+1)
  // }

  return (
    <>
      <div className="container pt-5 mt-5">
        <div className="row">
          {cartList.length<=0 ? (
             <>
               <BsFillCartXFill className='text-secondary' style={{fontSize:'300px'}} />
               <Link to='/' className='mt-5 text-decoration-none '>
                  <h3>Click here to continue shopping <FaArrowRight /></h3>
               </Link>
             </>
          ):(
            <>
            <div className="col col-lg-7 bg-dark overflow-y-scroll" style={{height:"500px"}}>
            {
              cartList.map(ele => (
                <div key={ele.id} className='m-5 text-start border-bottom p-2'>
                  <div className="row">
                    <div className="col col-2">
                      <img src={ele.images[0]} alt="ele.id" style={{width:"100px"}} />
                    </div>
                    <div className="col col-10 mb-5">
                      <div className='d-flex justify-content-between' onClick={() => removeItem(ele.id)}>
                      <h5 className='text-secondary'>{ele.title}</h5>
                      <RiDeleteBin5Fill className='text-light fs-4' style={{cursor: 'pointer'}}/>
                      </div>
                      <h5 className='text-secondary'>{ele.info}</h5>
                      <p className='fs-5 fw-bold mt-4 text-light'>Rs.{ele.finalPrice} <strike className='fs-6 text-secondary'> Rs.{ele.originalPrice}</strike></p>
                      {/* <button className='btn btn-secondary px-3 me-3' onClick={decrementQuantity} >-</button>
                      <span className='text-danger fw-bold'>{totalItems}</span>
                      <button className='btn btn-secondary px-3 ms-3' onClick={incrementQuantity} >+</button> */}
                    </div>
                  </div>
                  
                </div>
              ))
            }
          </div>
          <div className="col col-lg-2"></div>
          <div className="col col-lg-3 text-secondary text-center">
            <div>
              <h4 className='mb-5'>Order Summary</h4>
              <div className='border-bottom pb-4'>
                <div className='d-flex justify-content-between my-3'>
                  <h4>Original Price</h4>
                  <h4>Rs. 1234</h4>
                </div>
                <div className='d-flex justify-content-between my-3'>
                  <h4>Discount</h4>
                  <h4 className='text-success'>- Rs. 1234</h4>
                </div>
                <div className='d-flex justify-content-between my-3'>
                  <h4>Delivery</h4>
                  <h4>Free</h4>
                </div>
              </div>
              <div className='d-flex justify-content-between my-3 text-light'>
                  <h3>Total Price</h3>
                  <h3>Rs. 1234</h3>
              </div>
            </div>
              <div className="btn btn-danger text-light px-5">Checkout</div>
          </div></>
          )}
          
        </div>
      </div>
    </>
  )
}

export default Cart