import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIresultComponent } from './airesult.component';

describe('AIresultComponent', () => {
  let component: AIresultComponent;
  let fixture: ComponentFixture<AIresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AIresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
