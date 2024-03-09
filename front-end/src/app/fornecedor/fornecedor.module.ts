import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor.component';
import { RouterModule } from '@angular/router';
import { NovoComponent } from './novo/novo.component';
import { FornecedorRoutingModule } from './fornecedor.route';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { FornecedorService } from './services/fornecedor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NarikCustomValidatorsModule } from '@narik/custom-validators';
import { FornecedorResolve } from './services/fornecedor.resolve';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    FornecedorComponent,
    NovoComponent,
    ListaComponent,
    DetalhesComponent,
    EditarComponent,
    ExcluirComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NarikCustomValidatorsModule,
    NgxSpinnerModule
  ],
  providers: [
    FornecedorService,
    FornecedorResolve
  ]
})
export class FornecedorModule { }
