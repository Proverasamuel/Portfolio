import { CommonModule } from '@angular/common';
import { Component,OnInit, ChangeDetectorRef} from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}
ngOnInit(): void {
    this.initFadeInObserver();
  }

   /** Inicia a animação de fade-in para elementos com a classe .fade-in */
 private initFadeInObserver(): void {
  const elements = Array.from(document.querySelectorAll('.fade-in')) as HTMLElement[];

  elements.forEach(el => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el); // 👈 Para não ficar observando pra sempre
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    observer.observe(el);
  });
}


   showCvModal = false;

  // Abrir modal
toggleCvModal(): void {
  this.showCvModal = !this.showCvModal;
  console.log('Modal status:', this.showCvModal);
  this.cdr.detectChanges(); // 👈 Força atualização
}


  // Fechar modal
  closeCvModal(): void {
    this.showCvModal = false;
  }

  // Fechar ao clicar no overlay
  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeCvModal();
    }
  }

  downloadCv(lang: string): void {
  const fileUrl =
    lang === 'pt'
      ? 'assets/resume/provera-samuel-pt.pdf'
      : 'assets/resume/provera-samuel-en.pdf';

  const message =
    lang === 'pt'
      ? 'Iniciando download do CV em Português...'
      : 'Starting download of English CV...';

  // Exibe o SweetAlert de carregamento
  Swal.fire({
    title: message,
    text: 'Aguarde enquanto preparamos o download.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();

      // Garante que o download começa após 1 segundo
      setTimeout(() => {
        this.startDownload(fileUrl);

        Swal.fire({
          icon: 'success',
          title: 'Download iniciado!',
          showConfirmButton: false,
          timer: 1500,
        });
      }, 1000);
    },
  });

  this.closeCvModal();
}

// Método para iniciar o download "forçado"
private startDownload(url: string): void {
  const link = document.createElement('a');
  link.href = url;
  link.download = url.split('/').pop() || 'curriculo.pdf';
  link.click();
  link.remove();
}
}
