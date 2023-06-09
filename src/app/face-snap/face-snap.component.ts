import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  isSnap!: boolean;
  buttonSnap!: string;

  @Input() facesnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapsService,
    private router : Router 
    ) {}

  ngOnInit() {
    this.isSnap = false;
    this.buttonSnap = 'Oh Snap !'
  }

  isSnapChange() {
    if(!this.isSnap) {
      this.isSnap = true;
      this.buttonSnap = 'Oops, un Snap !'
      this.faceSnapService.snapFaceSnapById(this.facesnap.id, 'snap')
    } else {
      this.isSnap = false;
      this.buttonSnap = 'Oh Snap !'
      this.faceSnapService.snapFaceSnapById(this.facesnap.id, 'unsnap');
    }
  }

  

  onView() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`)
  }

}
