import { useMemo } from "react"
import { orderT } from "../types"
type orderTotalsPropos = {
    order: orderT[]
    propinas: number
}

export function OrderTotals({order, propinas}: orderTotalsPropos){

   const subTotal = useMemo(()=> order.reduce((total, item)=> total + (item.price * item.quantity), 0), [order])
   const propinasTotal = useMemo(()=>subTotal * propinas, [order, propinas])
   const total = useMemo(()=> subTotal + propinasTotal, [order, propinas])
    return(
        <>
            <h3 className="font-bold capitalize text-xl">totales y propinas</h3>
            <div className="border p-2 bg-gray-300">
                <p>subtotal a pagar: <span className="font-bold">${subTotal}</span></p>
                <p>propina: <span className="font-bold">${propinasTotal}</span></p>
                <p>total a pagar: <span className="font-bold">${total}</span></p>
            </div>
        </>
    )
}