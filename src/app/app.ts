import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, About, Services, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'botbite-lander';
}
