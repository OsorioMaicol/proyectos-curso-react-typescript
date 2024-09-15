import { menuItems } from "./data/db"
import { MenuItem } from "./components/MenuItem"
import { OrderItems } from "./components/OrderItems.tsx"
import { OrderTotals } from "./components/OrderTotals.tsx"
import useOrder from "./hooks/useOrder.ts"
import { FormPropinas } from "./components/FormPropinas.tsx"

function App() {

  const { addItem, order, removeItem, propinas, setPropina, saveOrder } = useOrder()

  return (
    <>
      <header className="py-5 bg-blue-950">
        <h1 className="text-center text-2xl uppercase font-black text-blue-300">Calculadora de Propinas con TypeScript</h1>
      </header>

      <main className="grid md:grid-cols-2 p-5">
        <div className="p-3">
          <h2 className="uppercase text-black font-black underline text-xl text-center mb-3 text-2xl">productos</h2>
          <div className="space-y-2">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

        </div>

        {
          order.length == 0 ? <p className="mt-16 uppercase text-center font-semibold border bg-gray-300 p-2 w-full h-10">No tienes productos agregados </p> : (
            <div className="space-y-2">
              <h2 className="uppercase text-black font-black underline text-xl text-center mb-6 text-2xl">tu orden</h2>


              <OrderItems
                order={order}
                removeItem={removeItem}
              />

              <FormPropinas
                setPropina={setPropina}
              />

              <OrderTotals
                order={order}
                propinas={propinas}
              />

              <button className="border w-full p-3 capitalize bg-blue-950 text-blue-200 font-extrabold rounded-md hover:bg-blue-600 duration-700 disabled:bg-blue-200 disabled:text-black" disabled={order.length === 0 ? true : false} onClick={saveOrder}>guardar orden</button>
            </div>
          )
        }
      </main>
    </>
  )
}

export default App
