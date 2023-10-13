import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';

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

  constructor(private service: EmailService, private router: Router) { }

  enviarEmail(){
    if(this.selectAssunto != 'Outro'){
      this.assunto = this.selectAssunto;
    }
    if(this.selectAssunto == 'Orçamento'){
      this.service.sendEmailOrçamento(this.email, this.assunto, this.mensagem, this.mensagemExtra);
    }else{
      this.service.sendEmail(this.email, this.assunto, this.mensagem);
    }
    this.router.navigate(['']);
  }
}
