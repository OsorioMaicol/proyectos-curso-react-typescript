import { db } from "../data/db";
import { useState, useEffect, useMemo} from "react";

export const useCart = ()=>{
    const initialCart = ()=>{
        const cartStorage = localStorage.getItem("cart");
        return cartStorage? JSON.parse(cartStorage) : []
      }
    
      initialCart()
      const [data] = useState(db)
      const [cart, setCart] = useState(initialCart)
    
      const maxItem = 8
      const minItem = 1
      const addToCart = (items)=>{
          
        const itemExist = cart.findIndex(guitar=> guitar.id == items.id)
        
        if(itemExist !== -1){
          const updateCart = [...cart];
          updateCart[itemExist].quantity++
          setCart(updateCart)
          return
        }
        items.quantity = 1
        setCart([...cart, items])
      }
    
      useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
      }, [cart])
    
      const removeItemCart = (id)=>{
        setCart(prevCart=> prevCart.filter(item=> item.id !== id))
      }
    
      const incrementCart = (id)=>{
        const cartIncrement = cart.map(item=>{
          if(item.id === id && item.quantity < maxItem){
            return{
              ...item,
              quantity : item.quantity+1
            }
          }
    
          return item
        })
    
        setCart(cartIncrement)
      }
    
      const decrementItem = (id)=>{
        const cartDecrement = cart.map(item=>{
          if(item.id === id && item.quantity >minItem){
            return{
              ...item,
              quantity: item.quantity -1
            }
          }
          return item
        })
    
        setCart(cartDecrement)
      }
    
      const clearCart = ()=>{
        setCart([])
      }

      const isEmpty = useMemo(()=>(cart.length === 0), [cart])
      const totalCart = useMemo(()=>(cart.reduce((total, item)=> total + (item.quantity * item.price), 0)), [cart])

      return{
        data,
        cart,
        addToCart,
        removeItemCart,
        incrementCart,
        decrementItem,
        clearCart,
        isEmpty,
        totalCart
      }
}