export interface Ikeyboard {
    brand: string
    id: number | string
    name: string
    price: number
    stocks: number
    switches: string
    usbConnector: string
    weight: string
}

export interface Iuser {
    displayName: string
    email: string
    uid: string
}

export interface Istate {
    keyboardsData: Ikeyboard[]
    user: Iuser
}