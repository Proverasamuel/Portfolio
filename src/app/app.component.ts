import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { ProjetosComponent } from "./components/projetos/projetos.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { HabilidadesComponent } from "./components/habilidades/habilidades.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, SobreComponent, ProjetosComponent, ContatoComponent, HabilidadesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
