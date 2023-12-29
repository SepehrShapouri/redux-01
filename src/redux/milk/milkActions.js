import { BUY_MILK } from "./milktypes";

export function buyMilk(milk = 1){
    return { type : BUY_MILK,payload:milk}
}