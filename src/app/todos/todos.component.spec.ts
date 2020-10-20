import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TodosService } from './todos.service';
import { TodosComponent } from './todos.component';
import {HttpClient} from '@angular/common/http';
describe('TodosComponent', () => {
  //Arrange
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClient ],
      declarations: [ TodosComponent ],
      providers : [ TodosService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', () => {
    
    let service = TestBed.get(TodosService);
    spyOn(service, 'getTodos').and.returnValue( Observable.from( [ [ 1, 2, 3]  ]));
    
    fixture.detectChanges();
    
    expect(component.todos.length).toBe(3);
  });
});
