import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultadoCreditoDTO } from './ResultadoCreditoDTO';
import { Environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NfseService {

  constructor(private http: HttpClient) {}

  buscarPorNfse(numeroNfse: string): Observable<ResultadoCreditoDTO[]> {
    return this.http.get<ResultadoCreditoDTO[]>(`${Environment.apiUrl}/creditos/${numeroNfse}`);
  }

}
