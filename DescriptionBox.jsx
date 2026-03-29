import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Welcome to our online store, your one-stop destination for the latest fashion, electronics, home essentials, and more. Explore a wide range of high-quality products at unbeatable prices. Enjoy fast delivery, secure payments, and excellent customer service. Shop with confidence and make every purchase a delightful experience!
            </p>
            <p>
                Discover the latest trends in fashion, electronics, and more. Shop top-quality products at unbeatable prices. Fast delivery and secure checkout guaranteed!
            </p>
        </div>
    </div>
  )
}
export default DescriptionBox;
