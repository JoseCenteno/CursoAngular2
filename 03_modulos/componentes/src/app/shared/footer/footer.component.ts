import { Component, OnInit } from '@angular/core';
interface Curso {
  autor: String;
  empresa: String;
  lugar: String;
  fecha: Date;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  curso: Curso;

  constructor() { }

  ngOnInit() {
    this.curso =  {
      autor: 'JLC',
      empresa: 'Indra',
      lugar: 'Málaga',
      fecha: new Date()
    };
  }
}
