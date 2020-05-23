import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspecialDiaPage } from './especial-dia.page';

describe('EspecialDiaPage', () => {
  let component: EspecialDiaPage;
  let fixture: ComponentFixture<EspecialDiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialDiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspecialDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
