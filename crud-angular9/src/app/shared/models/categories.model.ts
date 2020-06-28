import { Utils } from './../utils';
class CategoriesInterface {
    id: string;
    category: string;
    description?: string;
}

export class CategoriesModel {
    id: string;
    category: string;
    description?: string;

    constructor(data: CategoriesInterface) {
        this.id = data.id;
        this.category = Utils.firstCharacterToUppercase(data.category);
        this.description = data.description ? Utils.firstCharacterToUppercase(data.description) : '** Sem decrição **';
    }
}