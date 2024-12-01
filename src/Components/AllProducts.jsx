import React, { useState } from 'react'
import productsData from '../Data/ProductsData'
import { Link } from 'react-router-dom'
import { brandsMenu, categoryMenu, sortMenu } from '../Data/FilterBarData'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/addCartReducer'
// import { type } from '@testing-library/user-event/dist/type'

const AllProducts = () => {
    const [products, setProducts] = useState(productsData);

    const dispatch = useDispatch();

    // Add to cart
    const AddCart = (list) => {
        dispatch(add(list));
    }

    console.log(sortMenu);
    // const [{title}] = sortMenu;
    // console.log(title);

    const rating = (rateCount) => {
        // console.log(rateCount)
        let star ='';
        for(let i=1; i<=rateCount; i++){
            star += "⭐";
        }
        return star
    }

    const brandSorting = (type) => {
        // console.log(type)
        // setProducts(products)
        const filter = productsData.filter(ele => ele.brand == type || ele.category == type);
        // console.log(filter);
        setProducts(filter);
    }

  return (
    <div>
        <div className='mt-3'>d</div>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col col-lg-2">
                    <div className='text-light text-start'>
                        <h4 className='border-bottom pb-3'>Sort by</h4>
                        {
                            sortMenu && sortMenu.length>0 && sortMenu.map(ele => (
                                <div key={ele.id}>
                                    <div className='text-secondary py-1'>{ele.title}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='text-light text-start mt-3'>
                        <h4 className='border-bottom py-3'>Filter by</h4>
                        <h6 className='pb-2'>Brands</h6>
                        {
                            brandsMenu && brandsMenu.length>0 && brandsMenu.map(ele => (
                                <div key={ele.id} className='text-secondary'> 
                                    <input type="checkbox" 
                                        onChange={() => brandSorting(ele.label)}
                                        // defaultValue={ele.label}
                                    /> 
                                    {ele.label}
                                    {/* <div className='text-secondary py-1'>{ele.label}</div> */}
                                </div>
                            ))
                        }
                        <h6 className='pb-2 pt-4'>Category</h6>
                        {
                            categoryMenu && categoryMenu.length>0 && categoryMenu.map(ele => (
                                <div key={ele.id} className='text-secondary'>
                                    <input type="checkbox"
                                    onChange={() => brandSorting(ele.label)}
                                    /> {ele.label}
                                    {/* <div className='text-secondary py-1'>{ele.label}</div> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='col col-lg-9'>
                    <div className="container">
                        <div className="row">
                            {
                                products && products.length > 0 && products.map(ele => (
                                    <div className="col col-lg-4 my-3" key={ele.id}>
                                        <div className="card bg-black border-light">
                                            <Link to={`/productsDetails/${ele.id}`} className='text-decoration-none'>
                                                <div className='d-flex justify-content-center'>
                                                    <img src={ele.images[0]} className="card-img-top image-fluid py-3" style={{width: '200px'}} alt={ele.id}/>
                                                </div>
                                                <div className="card-body text-light text-start">
                                                    <div className='my-2'>{rating(ele.rateCount)}</div>
                                                    <h5 className="card-title">{ele.title}</h5>
                                                    <p className="card-text text-secondary border-bottom border-secondary pb-3">{ele.info}</p>
                                                    <p className='fs-4 fw-bold'>Rs.{ele.finalPrice} <strike className='fs-5 text-secondary'> Rs.{ele.originalPrice}</strike></p>
                                                </div>
                                            </Link>
                                            <button className='btn mx-3 mb-4' id='btn' onClick={() => AddCart(ele)}>Add to Cart</button>
                                        </div>
                                    </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts