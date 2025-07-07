import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ConsultaComponent } from "./consulta/consulta.component";
import { ModalAlertaComponent } from './components/modal-alerta/modal-alerta.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConsultaComponent, ModalAlertaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'consulta-credito';
  @ViewChild(ModalAlertaComponent) modalRef!: ModalAlertaComponent;

  constructor(private modalService: ModalService) {}

  ngAfterViewInit() {
    this.modalService.registrar(this.modalRef);
  }
}
