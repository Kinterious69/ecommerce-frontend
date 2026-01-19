import React from 'react'
import '../DescriptionBox/DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box"> Descriptions </div>
            <div className="descriptionbox-nav-box fade">Reviews(122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates buying and selling of products or service
                over the internet and serves as a virtual marketplace where buisnessess and individuals showcase their
                products,interact with customers,and conduct transactions without the need of a physical presence .E-commerce
                websites have gained more popularity due to their convenient accessibility and the global reach they offer.

            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
