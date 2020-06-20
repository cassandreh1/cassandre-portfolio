import { Component, OnInit, Input } from '@angular/core';
// import { faVuejs, faAngular, faHtml5, faJsSquare, faCss3, faSass, faNodeJs, faGit, 
// faBitbucket, faAtom} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {
  @Input() bgColor: String;
  @Input() titleColor: String;
  @Input() hrColor: String;
 technologies: string[] = [ 
   'devicon-javascript-plain colored',
   'devicon-vuejs-plain colored',
   'devicon-angularjs-plain colored',
   'devicon-typescript-plain colored',
   'devicon-jquery-plain colored',
   'devicon-html5-plain colored',
   'devicon-css3-plain colored',
   'devicon-sass-plain colored',
   'devicon-nodejs-plain colored',
   'devicon-jasmine-plain colored',
]
 methodologies: string[] = ['Agile (Lean/Scrum)', 'Waterfall'];
 developmentTools: string[] =[
   'devicon-visualstudio-plain colored',
   'devicon-atom-original colored',
   'devicon-github-plain colored',
   'devicon-git-plain colored',
   'devicon-bitbucket-plain colored',
 ];

  constructor() { }

  ngOnInit() {
  }

}
