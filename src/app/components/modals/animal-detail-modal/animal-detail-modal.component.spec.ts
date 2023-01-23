import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailModalComponent } from './animal-detail-modal.component';

describe('AnimalDatailModalComponent', () => {
  let component: AnimalDetailModalComponent;
  let fixture: ComponentFixture<AnimalDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalDetailModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
