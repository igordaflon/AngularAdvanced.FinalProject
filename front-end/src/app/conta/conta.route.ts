import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";

import { ContaAppComponent } from "./conta.app.component";
import { LoginComponent } from "./login/login.component";
import { CanActivate, CanDeactivate } from "./services/conta.guard";

const contaRouterConfig: Routes = [
    { path: '', component: ContaAppComponent, children: [
        { path: 'cadastro', component: CadastroComponent, canDeactivate: [CanDeactivate], canActivate: [CanActivate] },
        { path:  'login', component: LoginComponent }
    ] }
]

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports: [ 
        RouterModule
    ]
})
export class ContaRoutingModule {}