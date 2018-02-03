import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export class PasswordValidators{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };

        return null;
    };

    static checkPassDB(control: AbstractControl):Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'ai729@1809'){
                    resolve ({checkPassDB: true});
                }
                else resolve(null);             
            }, 2000)
        })
    }
}

