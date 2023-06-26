import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherlisteComponent } from './afficherliste.component';

describe('AfficherlisteComponent', () => {
  let component: AfficherlisteComponent;
  let fixture: ComponentFixture<AfficherlisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherlisteComponent]
    });
    fixture = TestBed.createComponent(AfficherlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
