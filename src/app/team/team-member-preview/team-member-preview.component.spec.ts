import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberPreviewComponent } from './team-member-preview.component';

describe('TeamMemberPreviewComponent', () => {
  let component: TeamMemberPreviewComponent;
  let fixture: ComponentFixture<TeamMemberPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
