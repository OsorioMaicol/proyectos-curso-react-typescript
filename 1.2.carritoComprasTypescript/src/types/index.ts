export type GuitarT = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number
}

export type itemsCart = GuitarT &{
    quantity: number
}

export type itemId = GuitarT["id"]

