import { FormGroup } from '@angular/forms';

function functionMarkFormFieldsAsTouched(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        control.markAsTouched({ onlySelf: true });
    })
}

export class Utils {
    static markFormFieldsAsTouched = functionMarkFormFieldsAsTouched;
}