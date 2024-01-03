import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
      <header class="brand-name"> 
        <a href="."> 
        <img class="brandlogo" src="/assets/logo.svg" alt="logo" aria-hidden="true"><br>
        Ana Sayfa
        </a>
      </header>
      <section class="content">
        <router-outlet>
          
        </router-outlet>
      </section> 
  </main>
  `,
  styleUrl: './app.component.css',
  imports:[HomeComponent, RouterModule  ]
})
export class AppComponent {
  title = 'Homes';
}
