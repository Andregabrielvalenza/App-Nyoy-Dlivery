import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreferenciaPage } from './preferencia.page';

describe('PreferenciaPage', () => {
  let component: PreferenciaPage;
  let fixture: ComponentFixture<PreferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
