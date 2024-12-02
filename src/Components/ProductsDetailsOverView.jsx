import React, { useState } from 'react'
import { specifications } from '../Data/SpecificationsData';
import reviewsData from '../Data/ReviewsData';
// import { Link } from 'react-router-dom'
// specifications




const ProductsDetailsOverView = ({details}) => {
  const [review1,review2,review3,review4,review5] = reviewsData;
  console.log(review1.name);
  
  const specificationsqqq = [
    {
        key1: "Brand",
        Brand: details.brand,
        key2: "Model",
        Model: details.title,
        key3: "Generic Name ",
        GenericName:details.category,
        key4: "Headphone Type",
        HeadPhone:details.type,
        key5: "Connectivity",
        Connectivity:details.connectivity,
        key6: "Microphone",
        Microphone:'Yes',
    },
    {
        key7: 'The',
        title: details.title ,
        type: details.type,
        connectivity: details.connectivity,
        category: details.category,
        key8: "provides with fabulous sound quality",
        key9: "Sound Tuned to Perfection",
        key10: "Comfortable to Wear",
        key11: "Long Hours Playback Time",
        key12: "Buy the",
        key13: "which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these Neckbands giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience"
    },
    {
      name1: review1.name,
      name2: review2.name,
      name3: review3.name,
      name4: review4.name,
      name5: review5.name,
      rate1: review1.rateCount,
      rate2: review2.rateCount,
      rate3: review3.rateCount,
      rate4: review4.rateCount,
      rate5: review5.rateCount,
      review1: review1.review,
      review2: review2.review,
      review3: review3.review,
      review4: review4.review,
      review5: review5.review,
      date1: review1.date,
      date2: review2.date,
      date3: review3.date,
      date4: review4.date,
      date5: review5.date,
    }
  ]

  let star ='';
  const rating = (rate) => {
      for(let i=1; i<=rate; i++){
          star = "⭐"
      }
      return star
  }

  const [pDetails, setPDetails] = useState(specificationsqqq[0])
  console.log(details);
  
  const detailsp = (data) => {
console.log(data);
// console.log(data);

    setPDetails(data)
  }
  console.log(pDetails);
  

  return (
    <>
      <div className='container'>
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-2">
            <button className='btn text-light mb-3' id='btn' onClick={() => detailsp(specificationsqqq[0])}>Specifications</button>
          </div>
          <div className="col-2">
            <button className='btn text-light' id='btn' onClick={() => detailsp(specificationsqqq[1])}>Overview</button>
          </div>
          <div className="col-2">
            <button className='btn text-light' id='btn' onClick={() => detailsp(specificationsqqq[2])}>Reviews</button>
          </div>
  
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 text-start">
                <div className='text-light text-start'>
                  <div className='my-2'><b className='text-info me-2 text-start'>{pDetails.key1} </b> {pDetails.Brand}</div>
                  <div className='my-2'><b className='text-info me-2 text-start'>{pDetails.key2}</b> {pDetails.Model}</div>
                  <div className='my-2'><b className='text-info me-2 text-start'>{pDetails.key3}</b> {pDetails.GenericName}</div>
                  <div className='my-2'><b className='text-info me-2 text-start'>{pDetails.key4}</b> {pDetails.HeadPhone}</div>
                  <div className='my-2'><b className='text-info me-2 text-start'>{pDetails.key5}</b> {pDetails.Connectivity}</div>
                  <div className='my-2'><b className='text-info me-2 text-start'>{pDetails.key6}</b> {pDetails.Microphone}</div>
                </div>
                </div>
                <div className="col col-lg-6 text-start text-light">
                  <b>{pDetails.key7} <span className='text-danger'>{pDetails.title}</span> {pDetails.type} {pDetails.connectivity} {pDetails.category} {pDetails.key8}</b> 
                  <div className='mt-3'>
                    <div className='py-1'>{pDetails.key9}</div>
                    <div className='py-1'>{pDetails.key10}</div>
                    <div className='py-1'>{pDetails.key11}</div>
                  </div>
                  <div className='mt-3'>
                    {pDetails.key12} <b>{pDetails.title} {pDetails.type} {pDetails.connectivity} {pDetails.category}</b> {pDetails.key13}
                    </div>
                </div>
                <div className="col col-lg-3 text-light text-start">
                  <div className='mb-3'>
                    <h5>{pDetails.name1}</h5>
                    <div className='text-warning'>{pDetails.rate1}{rating(pDetails.rate1)} <span className='text-secondary'>{pDetails.date1}</span> </div>
                    <div className='text-secondary mt-1'>{pDetails.review1}</div>
                  </div>
                  <div className='mb-4'>
                    <h5>{pDetails.name2}</h5>
                    <div className='text-warning'>{pDetails.rate2}{rating(pDetails.rate2)} <span className='text-secondary'>{pDetails.date2}</span> </div>
                    <div className='text-secondary mt-1'>{pDetails.review2}</div>
                  </div>
                  <div className='mb-4'>
                    <h5>{pDetails.name3}</h5>
                    <div className='text-warning'>{pDetails.rate3}{rating(pDetails.rate3)} <span className='text-secondary'>{pDetails.date3}</span> </div>
                    <div className='text-secondary mt-1'>{pDetails.review3}</div>
                  </div>
                  <div className='mb-4'>
                    <h5>{pDetails.name4}</h5>
                    <div className='text-warning'>{pDetails.rate4}{rating(pDetails.rate4)} <span className='text-secondary'>{pDetails.date4}</span> </div>
                    <div className='text-secondary mt-1'>{pDetails.review4}</div>
                  </div>
                  <div className='mb-4'>
                    <h5>{pDetails.name5}</h5>
                    <div className='text-warning'>{pDetails.rate5}{rating(pDetails.rate5)} <span className='text-secondary'>{pDetails.date5}</span> </div>
                    <div className='text-secondary mt-1'>{pDetails.review5}</div>
                  </div>
                </div>
              </div>
            </div>

            
        </div>
      </div>
    </>
  )
}

export default ProductsDetailsOverView