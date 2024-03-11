import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NovoComponent } from "./novo/novo.component";
import { EditarComponent } from "./editar/editar.component";
import { DetalhesComponent } from "./detalhes/detalhes.component";
import { ListaComponent } from "./lista/lista.component";
import { ExcluirComponent } from "./excluir/excluir.component";
import { ProdutoComponent } from "./produto.component";

const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            {
                path: 'adicionar-novo', component: NovoComponent
            },
            {
                path: 'editar/:id', component: EditarComponent
            },
            {
                path: 'detalhes/:id', component: DetalhesComponent
            },
            {
                path: 'excluir/:id', component: ExcluirComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }