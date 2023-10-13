import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import emailjs from '@emailjs/browser'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private api_Key = 're_EYdMwLiU_KBGpH7678QZXEhenyTZKVeMz';

  constructor(private http: HttpClient) { }

  sendEmailResend(email: string, assunto: string, mensagem: string): Observable<any> {

    const headers = new HttpHeaders()
      .set('Autorization', this.api_Key)
      .set('Content-Type', 'application/json');

    return this.http.post('https://api.resend.com/emails',{
      "from": 'onboarding@resend.dev',
      "to": "alvaro.pinheiro@com.ufes.br",
      "subject": assunto,
      "html": `<p>${mensagem}</p>`
    }, { headers: headers });

  }

  getKeyResend(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Autorization', this.api_Key)
      .set('Content-Type', 'application/json');
    return this.http.get('https://api.resend.com/api-keys', {
      headers: headers
    });
  }

  async sendEmailOrçamento(email: string, assunto: string, mensagem: string, mensagemExtra: string){
    emailjs.init("OWDsB62WZH6jkgpwi");
    await emailjs.send("service_8aifm2a","template_oty75kd",{
      subject: assunto,
      from_email: email,
      to_name: "Álvaro",
      message: mensagem,
      message_extra: mensagemExtra
    });

    alert('Email enviado com sucesso!');

  }

  async sendEmail(email: string, assunto: string, mensagem: string){
    emailjs.init("OWDsB62WZH6jkgpwi");
    await emailjs.send("service_8aifm2a","template_h0vn5ki",{
      subject: assunto,
      from_email: email,
      to_name: "Álvaro",
      message: mensagem,
    });

    alert('Email enviado com sucesso!');

  }

}
