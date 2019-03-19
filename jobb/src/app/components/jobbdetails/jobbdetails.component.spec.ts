import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobbdetailsComponent } from './jobbdetails.component';

describe('JobbdetailsComponent', () => {
  let component: JobbdetailsComponent;
  let fixture: ComponentFixture<JobbdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobbdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobbdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
