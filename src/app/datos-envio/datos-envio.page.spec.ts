import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosEnvioPage } from './datos-envio.page';

describe('DatosEnvioPage', () => {
  let component: DatosEnvioPage;
  let fixture: ComponentFixture<DatosEnvioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEnvioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosEnvioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
