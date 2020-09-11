import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from "rxjs/operators";
import { ErrorTracker } from "../models/error-tracker.model";
import { iPersona } from "../models/persona.model";

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse): Observable<ErrorTracker> {
        let dataError = new ErrorTracker();

        if (error.status == 0) {
            dataError.number = error.status;
            dataError.message = error.statusText;
            dataError.friendlyMessage = "Ups! Ocurrio un error recibiendo data";
        } else {
            dataError.number = null;
            dataError.message = "No";
            dataError.friendlyMessage =
                "Ups! algo paso, no contacte al admin porque tampoco sabe";
        }
        // alert("Error: " + dataError.friendlyMessage);
        return throwError(dataError); // Envia al componente el objeto error modificado.
    }
    public getListPersonas(): Observable<iPersona[] | ErrorTracker> { //
        return this.http
            .get<iPersona[]>("https://api.mocki.io/v1/570c5e5c")
            .pipe(catchError(this.handleError));
    }

}
