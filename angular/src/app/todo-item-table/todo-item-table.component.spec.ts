import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemTableComponent } from './todo-item-table.component';

describe('TodoItemTableComponent', () => {
  let component: TodoItemTableComponent;
  let fixture: ComponentFixture<TodoItemTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemTableComponent]
    });
    fixture = TestBed.createComponent(TodoItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
