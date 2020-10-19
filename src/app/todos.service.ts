import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }
  add(todo) {
    return this.http.post('...', todo).pipe(res => res);
  }

  getTodos() { 
    return this.http.get<[]>('...').pipe(res => res);
  }

  getTodosPromise() {
    return this.http.get<[]>('...').pipe(res => res).toPromise();
  }

  delete(id) {
    return this.http.delete('...').pipe(res => res);
  }
}
