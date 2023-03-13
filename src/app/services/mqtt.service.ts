import { Injectable } from '@angular/core';
const mqtt = require('mqtt');

@Injectable({
  providedIn: 'root'
})
export class MqttService {

  private clientId = 'mqttjs_' + Math.random().toString(8).substr(2, 4);
  private client = mqtt.connect('mqtt://test.mosquitto.org', {clientId: this.clientId});
  private topic = 'test/IrrigaJun'


  constructor(irrigadorID: number) { 
    this.topic = this.topic + irrigadorID;  
  }

  public sendMqttMessage(message: string) {
    this.client.on("connect",(connack: string) =>{   
      console.log("cliente conectado", connack); 
  
      const payload = JSON.parse(message);
      this.client.publish(this.topic, JSON.stringify(payload), {qos: 1, retain: true}, (err: any, packet: any) => {
        if (err) {
          console.log("Error publishing message", err);
        } else {
          console.log("Mensagem publicada", packet);
        }
    
      setInterval(() => {
        this.client.publish(this.topic, JSON.stringify(payload), {qos: 1, retain: true}, function(err: any, packet: any) {
          if (err) {
            console.log("Erro ao publicar mensagem", err);
          } else {
            console.log("Menssagem publicada", packet);
          }
        });
      }
      , 5000);
      });
    }) 
    
    this.client.on("error",function(error: string){
      console.log("Erro:" + error);
    });
    
    this.client.on("close", function() {
      console.log("Cliente desconectado");
    })
    
    this.client.on("reconnect", function() {
      console.log("Tetando reconectar");
    })
    
    this.client.on("offline", function() {
      console.log("Cliente offline");
    })
  }

  public receiveMqttMessage() {
    return "Hello World";
  }
}