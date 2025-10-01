import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  loading = false;
   sendEmail(form: any) {
    if (!form.valid) return;
     this.loading = true;
    emailjs.send(
      'service_boxj2kd',
      'template_8il9zkn',
      {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      },
      'WWRlEUSZH-eSS6v-B'
    )
    .then((response: EmailJSResponseStatus) => {
      this.loading = false;
      console.log('Email enviado com sucesso!', response.status, response.text);
      Swal.fire({
        title: 'Mensagem enviada!',
        text: 'Obrigado por entrar em contacto. Vou responder o mais rápido possível!',
        icon: 'success',
        confirmButtonColor: '#009CD0' // tua cor do Tailwind primary/accent
      });

      form.reset();
    }, (err) => {
      this.loading = false;
      console.error('Erro ao enviar email:', err);
      Swal.fire({
        title: '❌ Erro ao enviar!',
        text: 'Ocorreu um problema. Tente novamente mais tarde.',
        icon: 'error',
        confirmButtonColor: '#DC2626'
      });
    });
  }

}
