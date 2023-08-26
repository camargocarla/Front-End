import { Component } from '@angular/core';

@Component({
  selector: 'app-pg1',
  templateUrl: './pg1.component.html',
  styleUrls: ['./pg1.component.css']
})
export class Pg1Component {

// Variável de texto
texto:string = 'Aprendendo Angular';

// Criar um objeto
obj:any = {'nome': 'Carla', 'cidade':'Blumenau', 'idade':'28'};

// Inicialização
ngOnInit(){
  // alert('Bem vindo ao Angular!');
}

// Função de mensagem
mensagem():void{
  alert('Hello World!');
}

}
