import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LocalStorageUtils } from "src/app/utils/localstorage";
import { FornecedorComponent } from "../fornecedor.component";
import { NovoComponent } from "../novo/novo.component";

export const novoFornecedorCanDeactivate: CanDeactivateFn<NovoComponent> = (component: NovoComponent) => {
    if(component.mudancasNaoSalvas){
        return window.confirm('Abandonar preenchimento do formulário?')
    }
    return true;
};

export const fornecedorCanActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => 
  {
    const router = inject(Router);
    var local = new LocalStorageUtils();

    if(!local.obterTokenUsuario()){
        router.navigate(['/conta/login'])
    }
    
    let user = local.obterUsuario();
    let claim: any = route.data[0];

    if(claim !== undefined){
        let claim = route.data[0]['claim'];

        if(claim){
            if(!user.claims){
                router.navigate(['/acesso-negado']);
            }

            let userClaims = user.claims.find(x => x.type === claim.nome)

            if(!userClaims){
                router.navigate(['/acesso-negado']);
            }

            let valoresClaim = userClaims.value as string;

            if(!valoresClaim.includes(claim.valor)) {
                router.navigate(['/acesso-negado']);
            }
        }
    }

    return true;
  };