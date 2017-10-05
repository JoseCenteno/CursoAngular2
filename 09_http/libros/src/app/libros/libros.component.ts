import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  claveLibro: string;
  url: string;
  aLibros: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.aLibros = [];
    this.url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  buscarLibros () {
    this.http.get(this.url + this.claveLibro).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
