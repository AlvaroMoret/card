import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent {
  selectAssunto: string;
  email: string;
  assunto: string;
  mensagem: string;
  mensagemExtra: string;
  msgControl = new FormControl('', [Validators.required]);
  assControl = new FormControl('', [Validators.required]);


  constructor(private service: EmailService, private router: Router) { }

  enviarEmail(){
    if(this.selectAssunto != 'Outro'){
      this.assunto = this.selectAssunto;
    }
    if(this.mensagem == null || this.mensagem == '' || this.assunto == null || this.assunto == ''){
      alert('Você deve preencher todos os campos obrigatórios');
      return;
    }
    // if(this.selectAssunto == 'Orçamento'){
    //   this.service.sendEmailOrçamento(this.email, this.assunto, this.mensagem, this.mensagemExtra);
    // }else{
    //   this.service.sendEmail(this.email, this.assunto, this.mensagem);
    // }
    this.router.navigate(['']);
  }

  getErrorMessage() {
    if (this.msgControl.hasError('required')) {
      return 'Você deve digitar uma mensagem';
    }
    return '';
  }

  getErrorAssunto(){
    if (this.assControl.hasError('required')) {
      return 'Você deve adicionar um assunto';
    }
    return '';
  }
}
