class CategoriesInterface {
    id: string;
    name: string;
    description?: string;
}

export class CategoriesModel {
    id: string;
    name: string;
    description?: string;

    constructor(data: CategoriesInterface) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description ? data.description : '** Sem decrição **';
    }
}