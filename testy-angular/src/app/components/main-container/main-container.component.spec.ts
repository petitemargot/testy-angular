import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerComponent } from './main-container.component';
import {By} from "@angular/platform-browser";

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainContainerComponent]
    });
    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains header h1 with counter initial value', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain(0);
  });

  it('contains button with text Kliknij', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Kliknij');
  });
});
