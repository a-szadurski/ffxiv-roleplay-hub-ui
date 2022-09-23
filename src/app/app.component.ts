import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Submit your character';
  characterForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.characterForm = this.formBuilder.group({
      characterId: ''
    })
  }

  onSubmit() {
    this.http.get('localhost:8080/character/search/dupa');
  }
}
