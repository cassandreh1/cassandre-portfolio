import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {
  @Input() bgColor: String;
  @Input() titleColor: String;
  @Input() hrColor: String;
 technologies: Object[] = [ 
  {
    icon: 'devicon-javascript-plain colored',
    text:'JavaScript',
  },
  {
    icon: 'devicon-vuejs-plain colored',
    text:'Vue.js',
  },
  {
    icon: 'devicon-angularjs-plain colored',
    text:'Angular 9',
  },
  {
    icon: 'devicon-typescript-plain colored',
    text:'TypeScript.js',
  },
  {
    icon: 'devicon-jquery-plain colored',
    text:'jQuery',
  },
  {
    icon: 'devicon-html5-plain colored',
    text:'HTML5',
  },
  {
    icon: 'devicon-css3-plain colored',
    text:'CSS3',
  },
  {
    icon: 'devicon-sass-plain colored',
    text:'SCSS',
  },
  {
    icon:'devicon-nodejs-plain colored',
    text:'Node.js',
  },
  {
    icon: 'devicon-jasmine-plain colored',
    text:'Jasmine.js',
  },
]
 methodologies: string[] = ['Agile (Lean/Scrum)', 'Waterfall'];
 developmentTools: Object[] =[
  {
    icon: 'devicon-visualstudio-plain colored',
    text:'Visual Studio Code',
  },
  {
    icon: 'devicon-atom-original colored',
    text:'Atom',
  },
  {
    icon: 'devicon-git-plain colored',
    text:'Git',
  },
  {
    icon: 'devicon-github-plain colored',
    text:'GitHub',
  },
  {
    icon: 'devicon-bitbucket-plain colored',
    text:'BitBucket',
  },
 ];

  constructor() { }

  ngOnInit() {
  }

}
