import { Routes } from '@angular/router';
import { CadastroTarefasComponent } from './components/cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './components/consulta-tarefas/consulta-tarefas.component';
import { EdicaoTarefasComponent } from './components/edicao-tarefas/edicao-tarefas.component';

export const routes: Routes = [

    {
        path: 'pages/cadastro-tarefas',
        component: CadastroTarefasComponent
    },
    {
        path: 'pages/consulta-tarefas',
        component: ConsultaTarefasComponent
    },
    {
        path: 'pages/edicao-tarefas',
        component: EdicaoTarefasComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/pages/consulta-tarefas'
    }
];
