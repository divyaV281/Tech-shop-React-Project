import React from 'react'
import servicesData from '../Data/ServiceData'
import './style.css';

const Advantages = () => {
    // console.log(servicesData)
  return (
    <div>
        <h2 className='text-light my-5'>Our Advantages</h2>
            <div className="container-fluid">
                <div className="row text-light">
                    {
                        servicesData && servicesData.length>0 && servicesData.map(ele => (
                            <div className="col-lg-3 my-5" key={ele.id}>
                                <div className='d-flex'>
                                    <div className='mx-4 fs-2' id='icon'>{ele.icon}</div>
                                    <div className='text-start'>
                                        <h4>{ele.title}</h4>
                                        <div>{ele.info}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    </div>
  )
}

export default Advantages