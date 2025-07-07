import { Injectable } from '@angular/core';
import { ModalAlertaComponent } from '../components/modal-alerta/modal-alerta.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalInstance!: ModalAlertaComponent;

  registrar(modal: ModalAlertaComponent) {
    this.modalInstance = modal;
  }

  abrir(titulo: string, mensagem: string) {
    this.modalInstance?.abrir(titulo, mensagem);
  }

  fechar() {
    this.modalInstance?.fechar();
  }
}
