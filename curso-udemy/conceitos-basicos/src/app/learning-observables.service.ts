import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()

export class LearningObservables {
    constructor(private http: HttpClient) {
        let observer = {
            next: (newData) => console.log("Chamou o método NEXT e passou como parametro o newData => ", newData),
            error: (errorData) => console.log("Chamou o método ERROR e passou como parametro o errorData => ", errorData),
            complete: () => console.log("Chamou o método COMPLETE"),
        }

        //passando um observador como parametro
        // this.http.get("api/tasks").subscribe(observer);

        //criando um observador como parametro
        // this.http.get("api/tasks").subscribe({
        //     next: (newData) => console.log("Chamou o método NEXT e passou como parametro o newData => ", newData),
        //     error: (errorData) => console.log("Chamou o método ERROR e passou como parametro o errorData => ", errorData),
        //     complete: () => console.log("Chamou o método COMPLETE"),
        // });

        //passando diretamente as funções como parametro
        this.http.get("api/taskaaas").subscribe(
            (newData) => console.log("Chamou o método NEXT e passou como parametro o newData => ", newData),
            (errorData) => console.log("Chamou o método ERROR e passou como parametro o errorData => ", errorData),
            () => console.log("Chamou o método COMPLETE"),
        );

    }
}