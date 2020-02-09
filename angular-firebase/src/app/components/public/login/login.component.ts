import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public senha: string;
  public mensagem: string;
  public emailEnviado: boolean;
  public emailControle = null;

  constructor(
    private authServ: AuthenticationService,
    private router: Router
  ) { }

  public logar() {
    try {
      if (this.email == undefined || this.senha == undefined) {
        this.mensagem = "Usuário ou senha vazios!";
        return;
      }
      this.authServ.login(this.email, this.senha)
        .then(() => {
          this.router.navigate(['/admin/painel']);
        })
        .catch(erro => {
          let detalhes = '';

          switch (erro.code) {
            case 'auth/user-not-found': {
              detalhes = 'Não exeiste nenhum usuário para o email informado!';
              break;
            }
            case 'auth/invalid-email': {
              detalhes = 'Email inválido!';
              break;
            }
            case 'auth/wrong-password': {
              detalhes = 'Senha inválida!';
              break;
            }
            default: {
              detalhes = erro.message;
              break;
            }
          }
          this.mensagem = `Erro ao realizar login: ${detalhes}`;
        });
    } catch (erro) {
      this.mensagem = `Erro ao realizar login: ${erro}`;
    }
  }

  async enviaLink() {
    const { value: email } = await Swal.fire({
      title: 'Digite seu email',
      input: 'email',
      inputPlaceholder: 'Seu email',
      inputValidator: result => !result && 'Digite seu email!'
    });

    if (email) {
      this.authServ.resetPassword(email)
        .then(() => {
          this.emailEnviado = true;
          this.mensagem = `E-mail enviado para ${email} con instruções para recuperação!`;
        })
        .catch(erro => {
          this.mensagem = `Erro ao localizar o email! Detalhes: ${erro.message}`;
        })
    }
  }

  ngOnInit() {
  }

}
