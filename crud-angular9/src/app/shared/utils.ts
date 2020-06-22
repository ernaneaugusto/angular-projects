import { ExpensesModel } from './models/expenses.model';
import { CategoriesModel } from './models/categories.model';
import { URL } from './../core/urls';
import { FormGroup } from '@angular/forms';

/**
 * 
 * @param form Recebe um parametro do tipo FormGroup e preenche todos os campos do formulario passado por parametro com a classe ng-touched
 */
function functionMarkFormFieldsAsTouched(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        control.markAsTouched({ onlySelf: true });
    })
}

/**
 * 
 * @param data Array de objetos para se criar o model
 * @param model Nome do model a ser criado, ao criar novos models adiciona-los nas condicoes dessa funcao functionCreateModel()
 */
function functionCreateModel(data: Array<any>, model: string) {
    let arrayObjects: Array<any> = [];

    switch (model) {
        case URL.categories: {
            data.forEach(item => {
                let model = new CategoriesModel(item);
                arrayObjects.push(model);
            });
            break;
        } case URL.expenses: {
            data.forEach(item => {
                let model = new ExpensesModel(item);
                arrayObjects.push(model);
            })
        }
    }

    return arrayObjects;
}

/**
 * 
 * @param arrayObjects Array de objetos a serem ordenados
 * @param orderBy Parametro OPCIONAL. Nome da chave do array a ser usada como base na ordenacao, por padrao recebe o valor de name
 */
function functionSortArrayObjects(arrayObjects: Array<any>, orderBy: string = 'category') {
    return arrayObjects.sort((desc1, desc2) => {
        if (desc1[orderBy] < desc2[orderBy]) return -1;
        if (desc1[orderBy] > desc2[orderBy]) return 1;
        return 0;
    });
}

/**
 * 
 * @param data Tipo string: transforma o primeiro caractere de uma string em maiusculo
 */
function functionFirstCharacterToUppercase(data: string) {
    return data.charAt(0).toUpperCase() + data.slice(1);
}

export class Utils {
    static markFormFieldsAsTouched = functionMarkFormFieldsAsTouched;
    static createModel = functionCreateModel;
    static sortArrayObjects = functionSortArrayObjects;
    static FirstCharacterToUppercase = functionFirstCharacterToUppercase;
}