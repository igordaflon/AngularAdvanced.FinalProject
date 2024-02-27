import { inject } from "@angular/core";
import { CanActivateFn, CanDeactivateFn, Router } from "@angular/router";
import { LocalStorageUtils } from "src/app/utils/localstorage";
import { CadastroComponent } from "../cadastro/cadastro.component";

export const CanDeactivate: CanDeactivateFn<CadastroComponent> = (component: CadastroComponent) => {
    if(component.mudancasNaoSalvas){
        return window.confirm('Abandonar preenchimento do formulário?')
    }
    return true;
};

export const CanActivate: CanActivateFn = () => {
    const router = inject(Router);
    var local = new LocalStorageUtils();
    if(local.obterTokenUsuario()){
        router.navigate(['/home']);
    }
    return true;
  };