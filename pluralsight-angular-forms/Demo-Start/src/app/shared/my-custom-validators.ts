import { ValidatorFn, AbstractControl } from '@angular/forms';

// funcao factory que retorna null para intervalo entre os valores permitidos e um objeto { range: true } caso fora do intervalo
function ratingRangeFunction(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { range: true };
        }
        return null;
    };
}

export class MyCustomValidators {
    static ratingRange = ratingRangeFunction;
}