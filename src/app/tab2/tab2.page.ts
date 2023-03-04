import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  @ViewChild(IonDatetime)
  datetime!: IonDatetime;
  dataAtualFormatada = format(new Date(), 'dd/MM/yyyy');
  horarioAtualFormatado = format(new Date(), 'HH:mm');
  inputNota:string = '';
  nota : string = '';
  

  dataFormatada = '';

  dataMudou(valor: string) {
    console.log(valor);
    this.dataFormatada = format(parseISO(valor), 'HH:mm, dd/MM/yyyy');
  }

  fechar() {
    this.datetime.cancel(true);
  }

  confirmar() {
    this.datetime.confirm(true);
  }

  salvarNota() {
    this.nota = this.inputNota;
    console.log(this.nota);
    this.inputNota = '';
  }
}