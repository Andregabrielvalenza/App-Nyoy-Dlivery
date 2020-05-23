import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarritoMercadoPage } from './carrito-mercado.page';

describe('CarritoMercadoPage', () => {
  let component: CarritoMercadoPage;
  let fixture: ComponentFixture<CarritoMercadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoMercadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoMercadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
