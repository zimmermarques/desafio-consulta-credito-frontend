import { ModalService } from './../services/modal.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NfseService } from '../services/nfse.service';
import { HttpClientModule } from '@angular/common/http';
import { CreditoService } from '../services/credito.service';
import { ResultadoCreditoDTO } from '../services/ResultadoCreditoDTO';
import { CreditoDetalheComponent } from "../components/credito-detalhe/credito-detalhe.component";

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, CreditoDetalheComponent],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss',
  providers: [CreditoDetalheComponent]
})
export class ConsultaComponent {
  tipoBusca: 'nfse' | 'credito' = 'nfse';
  valorBusca: string = '';
  resultadosTabela: ResultadoCreditoDTO[] = [];
  resultadoDetalhado: ResultadoCreditoDTO | null = null;
  loading = false;

  constructor(
    private nfseService: NfseService,
    private creditoService: CreditoService,
    private modalService: ModalService
  ) {}

  limparConsulta() {
    this.resultadosTabela = [];
    this.resultadoDetalhado = null;
  }

  buscar() {
    this.resultadosTabela = [];
    this.resultadoDetalhado = null;
    this.loading = true;

    if (!this.valorBusca) {
      alert('Informe o valor para busca!');
      this.loading = false;
      return;
    }

    if (this.tipoBusca === 'nfse') {
      this.nfseService.buscarPorNfse(this.valorBusca).subscribe({
        next: (res) => {
          this.resultadosTabela = res
          if(res=== null) {
            this.modalService.abrir('Sem Dados','Nenhum crédito encontrado com a NFSe informada.');
          }
        },
        error: () => this.modalService.abrir('Erro','Erro ao buscar por NFS-e'),
        complete: () => this.loading = false
      });
    } else {
      this.creditoService.buscarPorCredito(this.valorBusca).subscribe({
        next: (res) => {
          this.resultadoDetalhado = res
          if(res=== null) {
            this.modalService.abrir('Sem Dados','Nenhum crédito encontrado com o número informado.');
          }
        },
        error: () => this.modalService.abrir('Erro','Erro ao buscar por número do crédito'),
        complete: () => this.loading = false
      });
    }
  }
}
