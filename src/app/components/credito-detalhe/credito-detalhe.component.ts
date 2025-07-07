import { Component, Input } from '@angular/core';
import { ResultadoCreditoDTO } from '../../services/ResultadoCreditoDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credito-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credito-detalhe.component.html',
  styleUrl: './credito-detalhe.component.scss'
})
export class CreditoDetalheComponent {
  @Input() dado: ResultadoCreditoDTO | null = null;
}
