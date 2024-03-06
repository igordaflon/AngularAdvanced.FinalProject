import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { BaseService } from "src/app/services/base.service";
import { CepConsulta } from "../models/CepConsulta";
import { Endereco } from "../models/endereco";
import { Fornecedor } from "../models/fornecedor";

@Injectable()
export class FornecedorService extends BaseService {

    fornecedor: Fornecedor = new Fornecedor();

    constructor(private http: HttpClient) { super() 
    
        this.fornecedor.nome = "Teste Fake"
        this.fornecedor.documento = "32165498754"
        this.fornecedor.ativo = true
        this.fornecedor.tipoFornecedor = 1
    }

    obterTodos(): Observable<Fornecedor[]> {
        return this.http
            .get<Fornecedor[]>(this.UrlServiceV1 + "fornecedores")
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Fornecedor> {
        return this.http
        .get<Fornecedor>(this.UrlServiceV1 + "fornecedores/" + id, super.ObterAuthHeaderJson())
        .pipe(catchError(super.serviceError));
    }

    novoFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        fornecedor.tipoFornecedor = fornecedor.tipoFornecedor == 1 ? +'1' : +'2';
        return this.http
            .post(this.UrlServiceV1 + "fornecedores", fornecedor, this.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    atualizarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        fornecedor.tipoFornecedor = fornecedor.tipoFornecedor == 1 ? +'1' : +'2';
        return this.http
            .put(this.UrlServiceV1 + "fornecedores/" + fornecedor.id, fornecedor, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    excluirFornecedor(id: string): Observable<Fornecedor> {
        return new Observable<Fornecedor>();
    }    

    atualizarEndereco(endereco: Endereco): Observable<Endereco> {
        return this.http
            .put(this.UrlServiceV1 + "fornecedores/endereco/" + endereco.id, endereco, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }
    
    consultarCep(cep: string): Observable<CepConsulta> {
        return this.http
            .get<CepConsulta>(`https://viacep.com.br/ws/${cep}/json/`)
            .pipe(catchError(super.serviceError))
    }
}