import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cadastro-tarefas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-tarefas.component.html',
  styleUrl: './cadastro-tarefas.component.css'
})
export class CadastroTarefasComponent {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient


  ){}
  
  formulario = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(100)]),
    dataHora: new FormControl('',[Validators.required,]),
    prioridade: new FormControl('',[Validators.required]),
    descricao: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(250)])
  })

  cadastrarTarefa () : void {
    this.httpClient.post(environment.apiTarefas, this.formulario.value)
    .subscribe({
      next: (data : any) =>{
        this.mensagem = 'Tarefa cadastrada com sucesso: ' + data.id;
        this.formulario.reset();
      }, 
      error: (e) => {
        console.log(e.error);
      }
    })
  }

  get f () {
    return this.formulario.controls;
  }

}
