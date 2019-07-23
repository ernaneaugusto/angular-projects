import { MenuItem } from "../menu-item/menu-item.model";

export class CartItem {

    value(): number{
        let total = this.menuItem.price * this.quantity;
        return total;
    }

    constructor(public menuItem: MenuItem, public quantity: number = 1) { }
}