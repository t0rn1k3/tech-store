import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechContainerComponent } from './tech-container.component';

describe('TechContainerComponent', () => {
  let component: TechContainerComponent;
  let fixture: ComponentFixture<TechContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
