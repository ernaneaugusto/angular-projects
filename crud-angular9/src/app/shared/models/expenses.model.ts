import { Utils } from './../utils';

class ExpensesInterface {
    id: string;
    description: string;
    purchaseDate: Date;
    category: string;
    amount: string;
    tag?: string;
}

export class ExpensesModel {
    public id: string;
    public description: string;
    public purchaseDate: Date;
    public category: string;
    public amount: string;
    public tag?: string;

    constructor(data: ExpensesInterface) {
        this.id = data.id;
        this.description = data.description ? Utils.FirstCharacterToUppercase(data.description) : '** Sem decrição **';
        this.purchaseDate = new Date(data.purchaseDate); //data.purchaseDate;
        this.category = Utils.FirstCharacterToUppercase(data.category);
        this.amount = data.amount;
        this.tag = data.tag.length > 0 ? Utils.FirstCharacterToUppercase(data.tag) : '** Sem tag **';
        console.log("## DATA", data.purchaseDate);
        console.log("## THISDATA", this.purchaseDate);
    }
}