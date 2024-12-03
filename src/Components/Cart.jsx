import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillCartXFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import CartList from './CartList';
import CartPrice from './CartPrice';

const Cart = () => {
  const cartList = useSelector(state => state.cartData.list);
  let totalPrice = 0;
  totalPrice += cartList.originalPrice * cartList.quantity
  console.log(cartList);
  

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