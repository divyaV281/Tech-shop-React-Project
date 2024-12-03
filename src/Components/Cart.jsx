import React, { useState } from 'react'
// import { RiDeleteBin5Fill } from 'react-icons/ri';
// import productsData from '../Data/ProductsData'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillCartXFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import CartList from './CartList';
import CartPrice from './CartPrice';
// import CartPrice from './CartPrice';

const Cart = () => {
  const cartList = useSelector(state => state.cartData.list);
  let totalPrice = 0;
  totalPrice += cartList.originalPrice * cartList.quantity
  console.log(cartList);
  
  // const [totalItems, setTotalItems] = useState(quantity)
  const dispatch = useDispatch();

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
                <CartList key={ele.id} list={ele} />
              ))
            }
          </div>
          <div className="col col-lg-2"></div>
          <div className="col col-lg-3 text-secondary text-center">
            <CartPrice list={cartList}/>
              {/* <div>
              <h4 className='mb-5'>Order Summary</h4>
              <div className='border-bottom pb-4'>
                <div className='d-flex justify-content-between my-3'>
                  <h4>Original Price</h4>
                  {cartList.map(ele => (
                    <h4>{totalPrice}</h4>
                  ))}
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
            </div>  */}
              <div className="btn btn-danger text-light px-5">Checkout</div>
          </div>
          </>
          )}
          
        </div>
      </div>
    </>
  )
}

export default Cart