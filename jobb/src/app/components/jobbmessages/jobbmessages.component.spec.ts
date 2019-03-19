import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobbmessagesComponent } from './jobbmessages.component';

describe('JobbmessagesComponent', () => {
  let component: JobbmessagesComponent;
  let fixture: ComponentFixture<JobbmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobbmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobbmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
