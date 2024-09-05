import Header from "./components/Header"
import Guitar from "./components/Guitar"
import {db} from "./data/db.js"
import { useEffect, useState } from "react"

function App() {
  

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

  return (
    <>
    <Header
      cart={cart}
      removeItemCart={removeItemCart}
      incrementCart={incrementCart}
      decrementItem={decrementItem}
      clearCart={clearCart}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar=>(
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}

        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
