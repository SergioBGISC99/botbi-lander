import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { About } from '../../components/about/about';
import { Services } from '../../components/services/services';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-main',
  imports: [Header, About, Services, Contact],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export default class Main {}
