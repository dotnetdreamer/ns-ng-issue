import { OnInit } from "@angular/core";
import { NgZone } from "@angular/core";
import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { NgxPubSubService } from "@pscoped/ngx-pub-sub";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit { 
    constructor(private routerExt: RouterExtensions
        , private ngZone: NgZone
        , private pubsubSvc: NgxPubSubService) {
        this._init();
    }

    async ngOnInit() {
        this.pubsubSvc.publishEvent('init');

    }

    private _init() {
        this.pubsubSvc.subscribe('init', async () => {
            const numOfVehicles = await this._testPromise();
            if(numOfVehicles == 0) {
                this.ngZone.run(async () => {
                    await this.routerExt.navigate(['/home']);
                });
            } else {
                this.ngZone.run(async () => {
                    await this.routerExt.navigate(['/parking']);
                }); 
            }
        });
    }
    
    private _testPromise() {
        return new Promise((resolve, reject) => {
            resolve(0);
        });
    }
}
