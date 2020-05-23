import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscogerMenuPage } from './escoger-menu.page';

describe('EscogerMenuPage', () => {
  let component: EscogerMenuPage;
  let fixture: ComponentFixture<EscogerMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscogerMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscogerMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
