import { Component } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  dataAtualFormatada = format(new Date(), 'dd/MM/yyyy');
  horarioAtualFormatado = format(new Date(), 'HH:mm');

  dataFormatada = '';

  dataMudou(valor: string) {
    console.log(valor);
    this.dataFormatada = format(parseISO(valor), 'HH:mm, dd/MM/yyyy');
  }

}
