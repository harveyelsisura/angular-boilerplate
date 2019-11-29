import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Subject } from "rxjs";
import { AppService } from '../services/app.service';

@Injectable({
    providedIn: "root"
})
export class MainService {
    navClass = new Subject();
    sidenavListener = new Subject();
    constructor(private http: Http, private appService: AppService) { }

}