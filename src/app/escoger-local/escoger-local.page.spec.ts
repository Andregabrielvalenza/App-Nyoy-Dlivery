import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscogerLocalPage } from './escoger-local.page';

describe('EscogerLocalPage', () => {
  let component: EscogerLocalPage;
  let fixture: ComponentFixture<EscogerLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscogerLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscogerLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
