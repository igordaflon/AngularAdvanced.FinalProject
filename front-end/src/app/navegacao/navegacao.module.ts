import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuLoginComponent } from "./menu-login/menu-login.component";
import { MenuComponent } from "./menu/menu.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AcessoNegadoComponent } from "./acesso-negado/acesso-negado.component";


@NgModule({
    declarations: [
        MenuComponent,
        MenuLoginComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,
        AcessoNegadoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    exports: [
        MenuComponent,
        MenuLoginComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,
        AcessoNegadoComponent
    ]
})
export class NavegacaoModule {}