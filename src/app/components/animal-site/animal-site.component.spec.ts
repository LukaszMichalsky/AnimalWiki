import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSiteComponent } from './animal-site.component';

describe('AnimalSiteComponent', () => {
  let component: AnimalSiteComponent;
  let fixture: ComponentFixture<AnimalSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
