import { useState } from "react"
import type { menuItemsT,orderT } from "../types"

export default function useOrder(){

    const [order, setOrder] = useState<orderT[]>([])
    const [propinas, setPropina] = useState(0)

    const addItem = (item: menuItemsT)=>{

        const exist = order.find(order=> order.id === item.id)
        if (exist) {
            const updateOrder = order.map(orderItem=> orderItem.id === item.id? {...orderItem, quantity: orderItem.quantity + 1} :orderItem)
            setOrder(updateOrder)
        }
        else {
            const newItem : orderT= {...item, quantity: 1}
            setOrder([...order, newItem])
        }

    }

    const removeItem = (id: menuItemsT["id"])=>{
        setOrder(order.filter(item=> item.id !== id))
    }

    const saveOrder = ()=>{
        setOrder([])
        setPropina(0)
    }




    return{
        addItem,
        order,
        propinas,
        setPropina,
        removeItem,
        saveOrder
    }
}