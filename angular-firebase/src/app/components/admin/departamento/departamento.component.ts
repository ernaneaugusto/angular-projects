import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-departamento',
    templateUrl: './departamento.component.html',
    styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

    public departamentos$: Observable<Departamento[]>;
    public edit: boolean;
    public displayDialogDepartamento: boolean;
    public form: FormGroup;

    constructor(
        private departamentoService: DepartamentoService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.departamentos$ = this.departamentoService.list()
        this.configForm()
    }

    public configForm() {
        this.form = this.fb.group({
            id: new FormControl(),
            nome: new FormControl('', Validators.required),
            telefone: new FormControl('')
        });
    }

    public add() {
        this.form.reset();
        this.edit = false;
        this.displayDialogDepartamento = true;
    }

    public selecionaDepartamento(depto: Departamento) {
        this.edit = true;
        this.displayDialogDepartamento = true;
        this.form.setValue(depto);
    }

    public save() {
        this.departamentoService
            .createOrUpdate(this.form.value)
            .then(() => {
                this.displayDialogDepartamento = false;
                Swal.fire(`Departamento	${!this.edit ? 'salvo' : 'atualizado'} com	sucesso.`, '', 'success');
            })
            .catch((erro) => {
                this.displayDialogDepartamento = false;
                Swal.fire(`Erro	ao	${!this.edit ? 'salvo' : 'atualizado'} o departamento.`, `Detalhes:	${erro}`, 'error');
            });

        this.form.reset();
    }

    public delete(depto: Departamento) {
        const modalInfos = {
            title: 'Confirma a exclusão do departamento?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        };

        Swal.fire(modalInfos)
            .then((result) => {
                if (result.value) {
                    this.departamentoService
                        .delete(depto.id)
                        .then(() => {
                            Swal.fire('Departamento	excluído	com	sucesso!', '', 'success')
                        })
                }
            })
    }

}
