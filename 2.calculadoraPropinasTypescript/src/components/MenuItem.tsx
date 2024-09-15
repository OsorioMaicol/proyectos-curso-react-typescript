import { menuItemsT } from "../types"
type MenuItemProps = {
    item: menuItemsT,
    addItem: (item: menuItemsT) => void
}


export function MenuItem({item, addItem}:MenuItemProps){

    return(
        <button className="border border-blue-700 w-full text-center flex justify-between p-3 rounded-md border-blue-700 hover:bg-blue-900 hover:text-white duration-700" onClick={()=>{addItem(item)}}>
            <p className="capitalize hover:underline">{item.name}</p>
            <p>${item.price}</p>
        </button>
    )
}