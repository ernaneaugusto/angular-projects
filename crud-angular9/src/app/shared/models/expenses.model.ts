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
        let month = newDate.getMonth() + 1;
        let correctMonth: string | number;
        if (month < 10) {
            correctMonth = `0${month}`;
        } else {
            correctMonth = month;
        }
        return `${newDate.getFullYear()}-${correctMonth}-${newDate.getDate() + 1}`;
    }
}