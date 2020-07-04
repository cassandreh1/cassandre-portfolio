import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { faHome, faFile, faGripHorizontal, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faFile = faFile;
  faAngleDown = faAngleDown;
  faGripHorizontal = faGripHorizontal;
  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  handleScroll() {
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
