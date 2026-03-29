// import React, { createContext } from 'react';
import all_product from "../assets/all_product";
import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index=0; index < all_product.length+1; index++) {
        cart[index] = 0;
        // cart[all_product[index].id] = 0;
    }
    // for (let i = 0; i < all_product.length; i++) {
    //     cart[all_product[i].id] = 0;
    // }
    return cart;
} 

const ShopContextProvider = (props) => {

    const[cartItems,setCartItems] = useState(getDefaultCart());
    // const contextValue = {all_product,cartItems};

    // const addToCart = (itemId) => {
    //     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    //    console.log(cartItems);
    // }
    const addToCart = (itemId) => {
    // console.log("ADDING:", itemId);
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);

}

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.newPrice * cartItems[item];
            }
            
        }
        return totalAmount;
    };
        const getTotalCartItems = () => {
            let totalItem = 0;
            for(const item in cartItems)
            {
                if(cartItems[item]>0)
                {
                    totalItem+= cartItems[item];
                }
            }
            return totalItem;
        }

    
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;