import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {
 technologies: string[] = [ 'JavaScript',
  'Vue.js',
  'Angular 5',
  'TypeScript with ES6 features',
  'jQuery',
  'HTML5',
  'CSS',
  'SCSS',
  'Node.js',
  'Chai.js',
  'Mocha.js',
  'Jasmine.js']
 methodologies: string[] = ['Agile (Lean/Scrum)', 'Waterfall'];
 developmentTools: string[] =[
  'Visual Studio Code',
  'Atom',
  'Brackets',
  'GitHub/Git',
  'BitBucket',
 ];

  constructor() { }

  ngOnInit() {
  }

}
