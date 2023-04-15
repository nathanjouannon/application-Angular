import { Component } from '@angular/core';
import { Router, RouterLink, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  
  constructor(private router :Router) {

  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onAddFaceSnap(): void {
    this.router.navigateByUrl('additem')
  }

}
