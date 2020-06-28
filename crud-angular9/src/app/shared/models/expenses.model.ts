import { Utils } from './../utils';

class ExpensesInterface {
    id: string;
    description: string;
    purchaseDate: string;
    category: string;
    amount: string;
    tag?: string;
}

export class ExpensesModel {
    public id: string;
    public description: string;
    public purchaseDate: string;
    public category: string;
    public amount: string;
    public tag?: string = '--';

    constructor(data: ExpensesInterface) {
        this.id = data.id;
        this.description = Utils.firstCharacterToUppercase(data.description);
        this.purchaseDate = this.formatDateBR(data.purchaseDate);
        this.category = Utils.firstCharacterToUppercase(data.category);
        this.amount = data.amount;
        this.tag = Utils.firstCharacterToUppercase(data.tag);
    }

    private formatDateBR(date: string): string {
        const newDate = new Date(date);
        return `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate() + 1}`;
    }
}