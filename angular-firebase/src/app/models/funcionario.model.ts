import { Model } from './model';
import { Departamento } from './departamento.model';

export class Funcionario extends Model {
    nome: string;
    funcao: string;
    email: string;
    ultimoAcesso: Date;
    departamento: Departamento;
}
