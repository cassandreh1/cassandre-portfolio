import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('stickyMenu')  menuElement: ElementRef;
  menuPosition:any;
  ngOnInit() {
  }
  ngAfterViewInit(){
    // this.menuPosition = this.menuElement.nativeElement.offsetTop
  }
  async onMenuClick(){
    // const windowScroll = window.pageYOffset;
    // if(windowScroll >= this.menuPosition){
    //     await this.menuElement.nativeElement.lastElementChild.classList.remove('show')
    //     window.scroll({top: 0, behavior: 'smooth' });
    //     console.log('windwScroll greater')
    // } else {
    //   console.log('windwScroll less than')
    // }
  }
}
