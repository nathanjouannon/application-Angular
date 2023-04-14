import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  isSnap!: boolean;
  buttonSnap!: string;

  @Input() facesnap!: FaceSnap;

  ngOnInit() {
    this.isSnap = false;
    this.buttonSnap = 'Oh Snap !'
  }

  isSnapChange() {
    if(!this.isSnap) {
      this.isSnap = true;
      this.buttonSnap = 'Oops, un Snap !'
      this.facesnap.snaps++;
    } else {
      this.isSnap = false;
      this.buttonSnap = 'Oh Snap !'
      this.facesnap.snaps--;
    }
  }

}
