import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-consulta-tarefas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './consulta-tarefas.component.html',
  styleUrl: './consulta-tarefas.component.css'
})
export class ConsultaTarefasComponent {

  tarefas: any[] = [];

  constructor(
    private httpClient : HttpClient
  ) {
    
    
  }

  formulario = new FormGroup ({
    dataMin: new FormControl ('', [Validators.required]),
    dataMax: new FormControl ('', [Validators.required])
  });

  
  get f(){
    return this.formulario.controls;

  }

  consultarTarefas () : void {

    const dataMin = this.formulario.value.dataMin;
    const dataMax = this.formulario.value.dataMax;

    this.httpClient.get(environment.apiTarefas + "/" + dataMin + "/" + dataMax)
    .subscribe({
      next: (data) =>{
        this.tarefas = data as any [];
      },
      error: (e) => {
        console.log(e.error)
      }
      
    })
  }
}
