import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuranceVoitureComponent } from './assurance-voiture.component';

describe('AssuranceVoitureComponent', () => {
  let component: AssuranceVoitureComponent;
  let fixture: ComponentFixture<AssuranceVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuranceVoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuranceVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
