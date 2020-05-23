import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialDePedidoPage } from './historial-de-pedido.page';

describe('HistorialDePedidoPage', () => {
  let component: HistorialDePedidoPage;
  let fixture: ComponentFixture<HistorialDePedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialDePedidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialDePedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
