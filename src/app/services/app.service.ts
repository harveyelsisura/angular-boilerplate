import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { catchError, map } from "rxjs/operators";
import { throwError, Subject } from "rxjs";
import { api_url } from "./global";
declare var swal: any;

@Injectable({
    providedIn: "root"
})
export class AppService {
    isLoading = new Subject();
    loginListener = new Subject();
    paginationListener = new Subject();
    fullname: any;
    constructor(private http: Http) { }

    action(link, id, data) {
        const url = `${api_url}/v1/${link}?id=${id}&data=${data}`,
            headers: Headers = new Headers({
                "Content-Type": "application/json"
            });
        return this.patchService(url, {}, headers);
    }
    genericWarning(message) {
        return swal({
            type: "warning",
            title: "Sorry!",
            text: message
        });
    }

    genericError(message) {
        return swal({
            type: "error",
            title: "Error!",
            text: message
        });
    }

    genericSuccess(message) {
        return swal({
            type: "success",
            title: "Success!",
            text: message
        });
    }

    postService(url, data, headers) {
        return this.http.post(url, data, { headers }).pipe(
            map((response: Response) => {
                return this.onData(response);
            }),
            catchError((error: Response) => {
                return this.onError(error);
            })
        );
    }
    delService(url, headers) {
        return this.http.delete(url, { headers }).pipe(
            map((response: Response) => {
                return this.onData(response);
            }),
            catchError((error: Response) => {
                return this.onError(error);
            })
        );
    }

    getService(url, headers) {
        return this.http.get(url, { headers }).pipe(
            map((response: Response) => {
                return this.onData(response);
            }),
            catchError((error: Response) => {
                return this.onError(error);
            })
        );
    }

    patchService(url, data, headers) {
        return this.http.patch(url, data, { headers }).pipe(
            map((response: Response) => {
                return this.onData(response);
            }),
            catchError((error: Response) => {
                return this.onError(error);
            })
        );
    }

    putService(url, data, headers) {
        return this.http.put(url, data, { headers }).pipe(
            map((response: Response) => {
                return this.onData(response);
            }),
            catchError((error: Response) => {
                return this.onError(error);
            })
        );
    }

    copyToClipboard(id) {
        var copyText = document.getElementById(id) as HTMLInputElement;
        copyText.select();
        document.execCommand("copy");
    }

    private onData(response: Response) {
        return response.json();
    }

    private onError(error: Response) {
        return throwError(error.json());
    }
}
