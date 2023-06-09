import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-tdform',
    template: `
        <div class="container">
            <h2>TD from hero</h2>
            <div class="row">
                <div class="col">
                    <form #form="ngForm" (ngSubmit)="submit(form)">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input
                                id="name"
                                required
                                name="name"
                                ngModel
                                class="form-control"
                                type="text"
                                #name="ngModel"
                            />
                            <div
                                *ngIf="name.invalid && name.touched"
                                class="alert alert-danger mt-1"
                                role="alert"
                            >
                                Campo obbligatorio
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="alterEgo">Alter Ego</label>
                            <input
                                id="alterEgo"
                                required
                                name="alterEgo"
                                ngModel
                                class="form-control"
                                type="text"
                                #alterEgo="ngModel"
                            />
                            <div
                                *ngIf="alterEgo.invalid && alterEgo.touched"
                                class="alert alert-danger mt-1"
                                role="alert"
                            >
                                Campo obbligatorio
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="power">Super Potere</label>
                            <select
                                name="power"
                                required
                                ngModel
                                #power="ngModel"
                                class="form-select"
                                aria-label="Default select example"
                            >
                                <option selected>
                                    Seleziona un super potere
                                </option>
                                <option
                                    *ngFor="let power of powers"
                                    [value]="power"
                                >
                                    {{ power }}
                                </option>
                            </select>
                            <div
                                *ngIf="power.invalid && power.touched"
                                class="alert alert-danger mt-1"
                                role="alert"
                            >
                                Campo obbligatorio
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="enemy">Nemico</label>
                            <input
                                id="enemy"
                                maxlength="10"
                                name="enemy"
                                #enemy="ngModel"
                                ngModel
                                class="form-control"
                                type="text"
                            />
                        </div>
                        <div class="form-group">
                            <label for="planet">Pianeta</label>
                            <input
                                id="planet"
                                required
                                minlength="5"
                                name="planet"
                                ngModel
                                #planet="ngModel"
                                class="form-control"
                                type="text"
                            />
                            <div
                                *ngIf="planet.errors && planet.touched"
                                class="alert alert-danger mt-1"
                                role="alert"
                            >
                                <span *ngIf="planet.errors.required">
                                    Campo obbligatorio
                                </span>
                                <span *ngIf="planet.errors.minlength">
                                    Campo
                                    {{
                                        planet.errors.minlength.actualLength ==
                                        1
                                            ? planet.errors.minlength
                                                  .actualLength + ' carattere'
                                            : planet.errors.minlength
                                                  .actualLength + ' caratteri'
                                    }}, deve essere minimo
                                    {{
                                        planet.errors.minlength.requiredLength
                                    }}
                                    caratteri
                                </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="weakness">Debolezza</label>
                            <input
                                id="weakness"
                                name="weakness"
                                ngModel
                                class="form-control"
                                type="text"
                            />
                        </div>
                        <div class="row">
                            <div class="col d-grid gap-2">
                                <button
                                    type="submit"
                                    [disabled]="form.invalid"
                                    class="btn btn-primary mt-4"
                                >
                                    Crea
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
    styles: [],
})
export class TdformComponent implements OnInit {
    powers: string[] = ['super forte', 'super intelligente', 'allungabile'];
    constructor() {}

    ngOnInit(): void {}

    submit(form: NgForm) {
        console.log(form.value);
    }
}
