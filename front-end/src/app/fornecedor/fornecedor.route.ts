import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalhesComponent } from "./detalhes/detalhes.component";
import { EditarComponent } from "./editar/editar.component";
import { ExcluirComponent } from "./excluir/excluir.component";
import { FornecedorComponent } from "./fornecedor.component";
import { ListaComponent } from "./lista/lista.component";
import { NovoComponent } from "./novo/novo.component";
import { FornecedorResolve } from "./services/fornecedor.resolve";
import { fornecedorCanActivate, novoFornecedorCanDeactivate } from "./services/fornecedor.guard";

const fornecedorRouterConfig: Routes = [
    { path: '', component: FornecedorComponent, children: [
        { path: 'listar-todos', component: ListaComponent },
        { 
            path: 'adicionar-novo', component: NovoComponent, 
            canActivate: [fornecedorCanActivate],
            canDeactivate: [novoFornecedorCanDeactivate],
            data: [{ claim: {nome: 'Fornecedor', valor: 'Adicionar'} }]
        },
        { 
            path: 'editar/:id', component: EditarComponent,
            canActivate: [fornecedorCanActivate],
            data: [{ claim: {nome: 'Fornecedor', valor: 'Atualizar'} }],
            resolve: {
                fornecedor: FornecedorResolve
            } 
        },
        { path: 'detalhes/:id', component: DetalhesComponent,
            resolve: {
                fornecedor: FornecedorResolve
            } 
        },
        { 
            path: 'excluir/:id', component: ExcluirComponent,
            canActivate: [fornecedorCanActivate],
            data: [{ claim: {nome: 'Fornecedor', valor: 'Excluir'} }],
            resolve: {
                fornecedor: FornecedorResolve
            } 
        }
    ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(fornecedorRouterConfig)
    ],
    exports: [ 
        RouterModule
    ]
})
export class FornecedorRoutingModule {}