import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCheatsheetListComponent } from './js-cheatsheet-list.component';

describe('JsCheatsheetListComponent', () => {
  let component: JsCheatsheetListComponent;
  let fixture: ComponentFixture<JsCheatsheetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsCheatsheetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsCheatsheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
