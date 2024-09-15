import { orderT, menuItemsT} from "../types"


type orderItemPrpos = {
    order: orderT[]
    removeItem: (id: menuItemsT["id"]) => void
}
export function OrderItems({ order, removeItem }: orderItemPrpos) {



    return (
        <>
            {
                order.map(item => (
                    <div key={item.id} className="border border-blue-500 flex justify-between">

                        <div className="w-2/3 p-2">
                            <div className="flex justify-between">
                                <p className="capitalize font-semibold underline">{item.name}</p>
                                <p className="">precio: ${item.price}</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="capitalize font-semibold underline">cantidad: {item.quantity}</p>
                                <p className="">total articulo: ${item.price * item.quantity}</p>
                            </div>
                        </div>

                        <div className=" flex items-center p-2 mr-5">
                            <button 
                            className="border border-red-500 hover:bg-red-700 duration-700 w-7 rounded-full inline-block text-center bg-red-500 text-white font-black"
                            onClick={()=>{removeItem(item.id)}}> 
                            
                            x</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}