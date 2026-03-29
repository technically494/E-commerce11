import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../../assets/arrow_icon.jpg'

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" width="15px"/> SHOP <img src={arrow_icon} alt="" width="15px"/>{product.category} <img src={arrow_icon} alt="" width="15px"/> {product.title}

    </div>
    // <div>Breadcrum</div>
  )
}
