import React, { useEffect, useState } from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../Redux/addCartReducer';
import productsData from '../Data/ProductsData';
import { remove } from '../Redux/addCartReducer';

const CartList = ({list}) => {
    // console.log(list.id);
    const {id, quantity} = list;
    // console.log(id, quantity);
    
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        const findProduct = productsData.filter(ele => ele.id === id)[0];
        setCartItem(findProduct);
    }, [id])
    // console.log(cartItem);
    
    const dispatch = useDispatch();
    const handleDecrement = () => {
        // console.log(quantity);
        dispatch(changeQuantity({
            id:id,
            quantity: quantity-1
        }))
        
    }

    const handleIncrement = () => {
        dispatch(changeQuantity({
            id: id,
            quantity: quantity+1
        }))
    }

    const removeItem = (id) => {
        dispatch(remove(id));
      }

    
    return (
    <>
    <div key={cartItem.id} className='m-5 text-start border-bottom p-2'>
        <div className="row">
            <div className="col col-2">
                <img src={cartItem.images[0]} alt={cartItem.id} style={{width:"100px"}} />
            </div>
            <div className="col col-10 mb-5">
                <div className='d-flex justify-content-between' >
                    <h5 className='text-secondary'>{cartItem.title}</h5>
                    <RiDeleteBin5Fill className='text-light fs-4' style={{cursor: 'pointer'}} onClick={() => {removeItem(cartItem.id)}}/>
                </div>
                <h5 className='text-secondary'>{cartItem.info}</h5>
                <p className='fs-5 fw-bold mt-4 text-light'>Rs.{cartItem.finalPrice} <strike className='fs-6 text-secondary'> Rs.{cartItem.originalPrice}</strike></p>
                    <div>
                        <button className='btn btn-secondary px-3 me-3' onClick={handleDecrement} >-</button>
                        <span className='text-danger fw-bold'>{quantity}</span>
                        <button className='btn btn-secondary px-3 ms-3' onClick={handleIncrement} >+</button>
                    </div>
            </div>
        </div>
    </div>
                  
    </>
  )
}

export default CartList