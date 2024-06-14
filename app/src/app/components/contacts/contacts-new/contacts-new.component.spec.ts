import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsNewComponent } from './contacts-new.component';

describe('ContactsNewComponent', () => {
  let component: ContactsNewComponent;
  let fixture: ComponentFixture<ContactsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
