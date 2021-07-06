import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAssurancesComponent } from './liste-assurances.component';

describe('ListeAssurancesComponent', () => {
  let component: ListeAssurancesComponent;
  let fixture: ComponentFixture<ListeAssurancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAssurancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAssurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
