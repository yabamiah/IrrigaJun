#ifndef MQTT_H
#define MQTT_H

void mqtt_start();

void mqtt_envia_mensagem(char * topico, char * mensagem);
void mqtt_recebe_mensagem(char * topico);

#endif