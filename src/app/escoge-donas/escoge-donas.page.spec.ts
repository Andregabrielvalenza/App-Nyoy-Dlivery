import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscogeDonasPage } from './escoge-donas.page';

describe('EscogeDonasPage', () => {
  let component: EscogeDonasPage;
  let fixture: ComponentFixture<EscogeDonasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscogeDonasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscogeDonasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
