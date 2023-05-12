import { atom } from "recoil"

export const currentUserState = atom({
    key:'UserAtom',
    default:undefined,
});

export const BasketState = atom({
    key:"Basket",
    default: undefined,
})