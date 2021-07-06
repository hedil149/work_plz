import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuranceMaisonComponent } from './assurance-maison.component';

describe('AssuranceMaisonComponent', () => {
  let component: AssuranceMaisonComponent;
  let fixture: ComponentFixture<AssuranceMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuranceMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuranceMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
