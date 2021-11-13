import { FamiliaService } from './familia.service';
import { Component } from '@angular/core';

@Component({
    selector: '<familia>',
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let mtu of familia">
        {{ mtu }}
        </li>
    </ul>
    `
})
export class FamiliaComponent {
    title = "Orodha ya wanafamilia";
    familia;
    constructor(service: FamiliaService){
        this.familia=service.getFamilia();
    }
    // logic for calling an http service
}