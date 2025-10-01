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
    title: 'SIGI 2.0',
    description: 'Sistema de gestão interna para a Multitel...',
    techs: ['Laravel', 'Angular', 'MySQL'],
    icon: 'fas fa-chart-line',
    gradient: 'from-primary to-accent',
    status: 'Concluído'
  },
  {
    title: 'Plataforma Universitária',
    description: 'Sistema que conecta empresas e universidades...',
    techs: ['Laravel', 'Angular', 'MySQL'],
    icon: 'fas fa-university',
    gradient: 'from-secondary to-primary',
    status: 'Em desenvolvimento'
  },
  {
    title: 'CDR Processor',
    description: 'Aplicação para processar arquivos CDRs...',
    techs: ['Node.js', 'ExcelJS', 'XLSX'],
    icon: 'fas fa-file-excel',
    gradient: 'from-accent to-secondary',
    status: 'Concluído'
  },
  // ✅ PROJETOS ADICIONAIS (INICIA ESCONDIDO)
  {
    title: 'Sistema de RH Interno',
    description: 'Gestão de funcionários com workflow de aprovação...',
    techs: ['Java Spring Boot', 'Angular'],
    icon: 'fas fa-users',
    gradient: 'from-primary to-secondary',
    status: 'Planeamento'
  },
  {
    title: 'Fundo Financeiro dos Colaboradores',
    description: 'Visualização de métricas financeiras em tempo real...',
    techs: ['Laravel', 'Angular', 'MySQL'],
    icon: 'fas fa-chart-pie',
    gradient: 'from-secondary to-accent',
    status: 'Em Desenvolvimento'
  }
];

}
