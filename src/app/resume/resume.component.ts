import { Component, OnInit } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  faFilePdf = faFilePdf
  constructor() { }
  ngOnInit() {
  }

}
