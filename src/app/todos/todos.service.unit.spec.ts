import { TestBed } from '@angular/core/testing';
import { TodosService } from './todos.service';
import { TodosComponent } from './todos.component'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosService', () => {
  //Arrange
  let component: TodosComponent;
  let service: TodosService;

  beforeEach(() => {
    service = new TodosService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    //Arrange data array with [1,2,3]
    let todos = [1, 2 , 3, 4];
    //Arrange - Install a spy on service.getTodos()
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from( [ todos ]);
    });
    //Act - call ngOnInit()
    component.ngOnInit();
    //Assert
    expect(component.todos.length).toBe(4);
    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes', ()=>{
    //Arrange
    let spy = spyOn(service, 'add').and.callFake(()=>{
      return Observable.empty();
    })

    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todos returned from the server', ()=>{
    //Arrange
    let todo = {id:1};

    let spy = spyOn(service, 'add').and.returnValue(
      Observable.from([todo]));
      //Act
      component.add();
      //Assert
      expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
      expect(component.todos.length).toBe(1);
  });

  it('should set the message property if server returns and error', () => {
    //Arrange
    let error = "error from the server";
    let spy = spyOn(service, 'add').and.returnValue(
      Observable.throw(  error ));
    //Act
    component.add();
    //Assert
    expect(component.message).toBe(error);
  });

  it('should call the server to delete a todo item', () => {
    //Arrange
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    //Act
    component.delete(1);
    //Assert
    expect(spy).toHaveBeenCalledWith(1);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});

