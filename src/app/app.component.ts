import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title= 'Tinymce 6';

  editorConfig ={
  base_url: '/tinymce',
  suffix: '.min',
  plugins: 'lists link image wordcount pageembed',
  toolbar: 'lists link image table pageembed',

  };
  
  constructor(
  public domSanitizer: DomSanitizer
  ) {
  }
}