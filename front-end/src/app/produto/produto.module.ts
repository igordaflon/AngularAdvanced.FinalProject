import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoComponent } from './novo/novo.component';
import { ProdutoComponent } from './produto.component';
import { ListaComponent } from './lista/lista.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { EditarComponent } from './editar/editar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoService } from './services/produto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    ProdutoComponent,
    NovoComponent,
    ListaComponent,
    ExcluirComponent,
    EditarComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }
