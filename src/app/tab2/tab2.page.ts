import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private toastController: ToastController) {
    this.dataAtual();
  }

  @ViewChild(IonDatetime)
  datetime!: IonDatetime;
  valorData = format(new Date(), 'dd/MM/yyyy');
  value = "";
  inputData : string = '';
  inputNota :string = '';
  nota : string = '';
  showPicker = false;
  inputHorarioI = '';
  inputHorarioF = '';
  horarioI = '';
  horarioF = '';

  dataFormatada = '';

  dataAtual() {
    this.dataFormatada = format(new Date(), 'dd/MM/yyyy');
  }

  dataMudou(value: any) {
    this.valorData = value;
    this.dataFormatada = format(parseISO(value), 'dd/MM/yyyy');
    this.showPicker = false;
  }

  fechar() {
    this.datetime.cancel(true);
  }

  confirmar() {
    this.datetime.confirm(true);
    console.log(this.dataFormatada);
    console.log(this.valorData);
  }

  salvarNota() {
    if (this.inputNota == '') {
      this.nota = 'Sem nota';
      return true
    }

    this.nota = this.inputNota;
    console.log(this.nota);
    this.inputNota = '';
    return true
  }

  salvarHorarioI() {
    if (this.inputHorarioI == '') {
      return false
    }

    this.horarioI = this.inputHorarioI;
    console.log(this.horarioI);
    this.inputHorarioI = '';
    return true;
  }

  salvarHorarioF() {
    if (this.inputHorarioF == '') {
      return false
    }

    this.horarioF = this.inputHorarioF;
    console.log(this.horarioF);
    this.inputHorarioF = '';
    return true;
  }

  async avisoToast() {
    const toast = await this.toastController.create({
      message: 'Preencha todos os campos',
      duration: 1500,
      color: 'danger',
      position: 'bottom'
    });

    await toast.present();
  }

  async confirmaçãoToast() {
    const toast = await this.toastController.create({
      message: 'Agendamento salvo com sucesso!',
      duration: 1500,
      color: 'success',
      position: 'bottom'
    });

    await toast.present();
  }

  async erroCamposToast() {
    const toast = await this.toastController.create({
      message: 'Verifique os campos corretamente',
      duration: 1500,
      color: 'danger',
      position: 'bottom'
    });

    await toast.present();
  }

  salvarAgendamento() {
    
    if (this.inputNota == '' || this.inputHorarioI == '' || this.inputHorarioF == '') {
      this.avisoToast();
    } else {
      let count = 0;
      this.salvarHorarioI() ? count : count++;
      this.salvarHorarioF() ? count : count++;
  
      count <=0 ? this.confirmaçãoToast() : this.erroCamposToast()
    }
  } 
}