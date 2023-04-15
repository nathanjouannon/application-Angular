import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  isSnap!: boolean;
  buttonSnap!: string;

  facesnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route : ActivatedRoute
    ) {}

  ngOnInit() {
    this.isSnap = false;
    this.buttonSnap = 'Oh Snap !';
    const faceSanpId = +this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapService.getFaceSnapById(faceSanpId);
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
}
