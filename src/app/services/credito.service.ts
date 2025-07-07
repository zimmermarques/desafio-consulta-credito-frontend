import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultadoCreditoDTO } from './ResultadoCreditoDTO';
import { Environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor(private http: HttpClient) {}

  buscarPorCredito(numeroCredito: string): Observable<ResultadoCreditoDTO> {
    return this.http.get<ResultadoCreditoDTO>(`${Environment.apiUrl}/creditos/credito/${numeroCredito}`);
  }
}
