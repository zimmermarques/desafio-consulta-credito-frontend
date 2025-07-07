import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoDetalheComponent } from './credito-detalhe.component';

describe('CreditoDetalheComponent', () => {
  let component: CreditoDetalheComponent;
  let fixture: ComponentFixture<CreditoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditoDetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
