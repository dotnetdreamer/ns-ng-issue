import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit { 
    constructor(private routerExt: RouterExtensions) {

    }

    async ngOnInit() {
        const numOfVehicles = await this._testPromise();
        if(numOfVehicles == 0) {
            await this.routerExt.navigate(['/home']);
        } else {
            await this.routerExt.navigate(['/parking']);
        }
    }

    
    private _testPromise() {
        return new Promise((resolve, reject) => {
            resolve(0);
        });
    }
}
