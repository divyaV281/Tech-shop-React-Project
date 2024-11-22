import React from 'react'
import { footMenu, footSocial } from '../Data/FooterData'
import './style.css'

const Footer = () => {
    // console.log(footMenu);
    const [row1, row2, row3] = footMenu;
    // console.log(row1)

    // console.log(footSocial)
    
  return (
    <div>
        <div className="container-fluid">
            <div className="row text-light text-start border-bottom">
                <div className="col-lg-4">
                    <h3 className='mb-4'>Tech-Shop</h3>
                    <p className='mb-3'>Subscribe to our Email alerts to receive <br /> early discount offers, and new products <br /> info.</p>
                    <input type="text" className='form-control bg-transparent' id='placeHolder' placeholder='Email Address*' />
                    <button type="button" id="btn" className='btn mt-4'>Subscribe</button>
                </div>
                <div className="col-lg-3 mb-5">
                    <div className='mb-4 fw-bolder fs-4'>{row1.title}</div>
                    <div>
                        {row1.menu.map(ele => (
                            <div key={ele.link}>
                                <p>{ele.link}</p>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='mb-4 fw-bolder fs-4'>{row2.title}</div>
                    <div>
                        {row2.menu.map(ele => (
                            <div key={ele.id}>
                                <p>{ele.link}</p>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className='mb-4 fw-bolder fs-4'>{row3.title}</div>
                    <div>
                        {row3.menu.map(ele => (
                            <div key={ele.link}>
                                <p>{ele.link}</p>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-lg-6 text-start text-light">
                        <div>2024 | All Rights Reserved. Built by | <b>DIVYA</b></div>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div className='d-flex text-light'>

                        {footSocial.map(ele => (
                            <div key={ele.id} className='mx-4 fs-4'>{ele.icon}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer