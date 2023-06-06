import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    FormArray,
} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'reactive';

    contenitoreForm!: FormGroup;
    generi = ['uomo', 'donna'];
    usernameProibiti = ['Mario', 'Anna'];

    constructor(private fb: FormBuilder) {}

    validUsername = (formC: FormControl) => {
        if (this.usernameProibiti.includes(formC.value)) {
            return { 'usernameProibito': true };
        } else {
            return { 'usernameProibito': false };
        }
    };

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.contenitoreForm = this.fb.group({
            username: ['', [Validators.required, this.validUsername]],
            email: ['', [Validators.required, Validators.email]],
            genere: this.fb.control('donna'),
            sports: this.fb.array([])
        });

        this.contenitoreForm.statusChanges.subscribe(stato => {
            console.log(`Stato del form: ${stato}`);
        });
    }

    getErrorsC(nome: string, errore: string) {
        return this.contenitoreForm.get(nome)?.errors![errore];
    }

    getFormC(nome: string) {
        return this.contenitoreForm.get(nome);
    }

    getSports() {
        return (this.contenitoreForm.get('sports') as FormArray).controls;
    }

    addSports() {
        const controllo = this.fb.control(null);
        (this.contenitoreForm.get('sports') as FormArray).push(controllo);
        console.log(this.getSports());
    }

    submitForm() {
        console.log(this.contenitoreForm);
        console.log('Form correttamente inviato');
        this.contenitoreForm.reset();
    }
}
