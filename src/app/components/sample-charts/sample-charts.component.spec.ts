import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleChartsComponent } from './sample-charts.component';

describe('SampleChartsComponent', () => {
  let component: SampleChartsComponent;
  let fixture: ComponentFixture<SampleChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
