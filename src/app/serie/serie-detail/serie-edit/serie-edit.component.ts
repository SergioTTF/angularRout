import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css']
})
export class SerieEditComponent implements OnInit {
  serieForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

}
