import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
showAllProjects = false;


projects = [
  {
    title: 'Lista de Presença Digital',
    description: 'Sistema de registo de presença digital para aulas, com autenticação, controlo em tempo real e histórico de participações.',
    techs: ['Angular', 'Tailwind CSS', 'Node.js', 'Firebase'],
    icon: 'fas fa-qrcode',
    gradient: 'from-primary to-accent',
    status: 'Concluído',
     images: [
      'assets/projects/presenca/1.png',
      'assets/projects/presenca/2.png',
      'assets/projects/presenca/3.png',
      'assets/projects/presenca/4.png',
      'assets/projects/presenca/5.png',
      'assets/projects/presenca/6.png'
    ],
    liveUrl: 'https://lista-de-presenca-app.netlify.app/'
  },
  {
    title: 'Fundo Financeiro dos Colaboradores',
    description: 'Plataforma para gestão de depósitos, levantamentos e empréstimos de colaboradores, com controlo financeiro e permissões por perfil.',
    techs: ['Angular', 'Tailwind CSS', 'Laravel', 'MySQL'],
    icon: 'fas fa-hand-holding-usd',
    gradient: 'from-secondary to-primary',
    status: 'Em Desenvolvimento',
    images: [
      'assets/projects/fundo/1.png',
      'assets/projects/fundo/2.png',
      'assets/projects/fundo/3.png',
      'assets/projects/fundo/4.png',
      'assets/projects/fundo/5.png',
      'assets/projects/fundo/6.png',
      'assets/projects/fundo/7.png',
      'assets/projects/fundo/8.png'
    ]
  },
  {
    title: 'Portal do Município de Talatona',
    description: 'Portal institucional do município, com páginas dinâmicas, consumo de APIs e foco em performance e acessibilidade.',
    techs: ['Angular', 'Tailwind CSS'],
    icon: 'fas fa-city',
    gradient: 'from-accent to-secondary',
    status: 'Concluído',
    images: [
      'assets/projects/talatona/1.png',
      'assets/projects/talatona/2.png',
      'assets/projects/talatona/3.png',
      'assets/projects/talatona/4.png',
      'assets/projects/talatona/5.png',
    ],
    liveUrl: 'https://talatona.ao/'
  },
  {
    title: 'Página de Vendas – Bom Preço',
    description: 'Página de vendas moderna e responsiva para promoção de produtos, integrada a base de dados para gestão de conteúdo.',
    techs: ['Angular', 'Tailwind CSS', 'MySQL'],
    icon: 'fas fa-shopping-cart',
    gradient: 'from-orange-500 to-red-500',
    status: 'Em Desenvolvimento',
    images: [
      'assets/projects/bom-preco/1.png',
      'assets/projects/bom-preco/2.png',
      'assets/projects/bom-preco/3.png',
      'assets/projects/bom-preco/4.png',
    ],
     liveUrl: 'https://bom-preco-sites.netlify.app/'
  },
  {
    title: 'Multitel Agro',
    description: 'Projeto IoT para monitorização agrícola com sensores LoRaWAN, integração com TTN e automações na plataforma TagoIO.',
    techs: ['IoT', 'LoRaWAN', 'TTN', 'TagoIO', 'JavaScript'],
    icon: 'fas fa-seedling',
    gradient: 'from-green-500 to-lime-500',
    status: 'Concluído'
  },
  {
    title: 'Portal do Instituto de Desenvolvimento Agrário',
    description: 'Portal institucional desenvolvido em colaboração, com implementação do frontend e consumo de APIs para exibição de dados.',
    techs: ['Angular', 'Tailwind CSS'],
    icon: 'fas fa-tractor',
    gradient: 'from-emerald-500 to-green-600',
    status: 'Concluído',
    liveUrl: 'https://ida.gov.ao/'
  }
];


selectedProject: any = null;
selectedImage: string | null = null;

openProject(project: any) {
  this.selectedProject = project;
  this.selectedImage = project.images[0];
}

closeProject() {
  this.selectedProject = null;
  this.selectedImage = null;
}

}
