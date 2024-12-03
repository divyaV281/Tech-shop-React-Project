import React, { useEffect, useState } from 'react'

const CartPrice = ({list,price}) => {
// console.log(list.orignalPrice);
// console.log(originalPrice);
let originalPrice=0;
let discountPrice=0;

list.map(ele => {
    originalPrice += ele.originalPrice * ele.quantity;
    discountPrice += ele.finalPrice * ele.quantity;
})
console.log(originalPrice);

    
  return (
    <>
        <div>
                <>
              <h4 className='mb-5'>Order Summary</h4>
              <div className='border-bottom pb-4'>
                <div className='d-flex justify-content-between my-3'>
                  <h4>Original Price</h4>
                  <h4 className='text-light'>Rs. {originalPrice}</h4>
                </div>
                <div className='d-flex justify-content-between my-3'>
                  <h4>Discount</h4>
                  <h4 className='text-success'>- Rs. {originalPrice - discountPrice}</h4>
                </div>
                <div className='d-flex justify-content-between my-3'>
                  <h4>Delivery</h4>
                  <h4>Free</h4>
                </div>
              </div>
              <div className='d-flex justify-content-between my-3 text-light'>
                  <h3>Total Price</h3>
                  <h3>Rs. {discountPrice}</h3>
              </div>
                </>
            {/* ))} */}
            </div> 
    </>
  )
}

export default CartPrice