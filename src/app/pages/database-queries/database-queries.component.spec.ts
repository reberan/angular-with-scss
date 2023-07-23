import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseQueriesComponent } from './database-queries.component';

describe('DatabaseQueriesComponent', () => {
  let component: DatabaseQueriesComponent;
  let fixture: ComponentFixture<DatabaseQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseQueriesComponent]
    });
    fixture = TestBed.createComponent(DatabaseQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
