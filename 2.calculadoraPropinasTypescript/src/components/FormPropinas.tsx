import { Dispatch, SetStateAction } from "react"
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]


type formPropinasProps = {
  setPropina: Dispatch<SetStateAction<number>>
}

export function FormPropinas({ setPropina }: formPropinasProps) {
  return (
    <>
      <form action="">
        {tipOptions.map(item => (
          <div key={item.id}>
            <label htmlFor={item.id}>{item.label}</label>
            <input type="radio" name="tip" id={item.id} value={item.value}
              onChange={e => setPropina(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </>
  )
}