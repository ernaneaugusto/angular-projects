import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Requisicao } from '../models/requisicao.model';
import { ServiceFirebase } from '../core/iservicefirebase.service';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService extends ServiceFirebase<Requisicao>	{
  constructor(firestore: AngularFirestore) {
    super(Requisicao, firestore, 'requisicoes');
  }
}