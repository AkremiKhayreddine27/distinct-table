import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctTableComponent } from './distinct-table.component';

describe('DistinctTableComponent', () => {
  let component: DistinctTableComponent;
  let fixture: ComponentFixture<DistinctTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
