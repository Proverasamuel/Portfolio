import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
 /** Tratamento do envio do formulário de contato */
  onSubmitContactForm(form: any): void {
    // Lógica futura com EmailJS aqui
    alert('Obrigado pela mensagem! Entrarei em contato em breve.');
    form.reset();
  }
}
