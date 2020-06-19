import { Component, HostListener } from '@angular/core';
import { faCircleNotch, faSpinner, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {
  trigger, animateChild, group,
  transition, animate, style, query, keyframes
} from '@angular/animations';
import { RouterOutlet, Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* => *', [
        animate('1s ease-in', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  faCircleNotch = faCircleNotch;
  faSpinner = faSpinner;
  faChevronUp = faChevronUp;
  showButton: Boolean = true;
   // Sets initial value to true to show loading spinner on first load
   loading: Boolean = true

   constructor(private router: Router) {
     this.router.events.subscribe((e : RouterEvent) => {
        this.navigationInterceptor(e);
      })
   }
  ngOnInit() {
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
      this.scrollToTop();
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
  @HostListener('window:scroll', [])
  displayButton() {
    console.log(document.documentElement.scrollTop);
    if ( document.documentElement.scrollTop > 400) {
      this.showButton = false;
    } else this.showButton = true;
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
