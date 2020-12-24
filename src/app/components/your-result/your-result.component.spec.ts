import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourResultComponent } from './your-result.component';

describe('YourResultComponent', () => {
  let component: YourResultComponent;
  let fixture: ComponentFixture<YourResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
