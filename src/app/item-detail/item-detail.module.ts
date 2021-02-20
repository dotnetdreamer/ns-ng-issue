import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';

import { ItemDetailComponent } from './item-detail.component';

export const routes: Routes = [
    { path: "", component: ItemDetailComponent }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [ItemDetailComponent]
})
export class ItemDetailModule { }