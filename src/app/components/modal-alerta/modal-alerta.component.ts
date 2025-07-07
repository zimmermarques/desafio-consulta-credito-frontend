import { Component, ViewChild, ElementRef } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-modal-alerta',
  standalone: true,
  templateUrl: './modal-alerta.component.html',
  styleUrls: ['./modal-alerta.component.scss']
})
export class ModalAlertaComponent {
  @ViewChild('modalElement', { static: true }) modalElementRef!: ElementRef;

  titulo = '';
  mensagem = '';
  private modalInstance!: Modal;

  ngOnInit() {
    this.modalInstance = new Modal(this.modalElementRef.nativeElement);
  }

  abrir(titulo: string, mensagem: string) {
    console.log('Abrindo modal com título:', titulo, 'e mensagem:', mensagem);
    this.titulo = titulo;
    this.mensagem = mensagem;
    this.modalInstance.show();
  }

  fechar() {
    this.modalInstance.hide();
  }
}
