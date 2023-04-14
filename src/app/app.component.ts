import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  firstSnap!: FaceSnap;
  secondSnap!: FaceSnap;
  thirdSnap!: FaceSnap;

  ngOnInit() {
    this.firstSnap = new FaceSnap(
      'Archibalde',
      'Un gentil monsieurs',
      new Date(),
      3,
      'https://tse1.mm.bing.net/th?id=OIP.lvHuTIhKq_vQnhhrSJNkcgHaJA&pid=Api'
    ) 
    this.secondSnap = new FaceSnap(
      'Olivio',
      `nan il n'aime pas les olives`,
      new Date(),
      1,
      'https://tse4.mm.bing.net/th?id=OIP.UMoOEVPN7LD05Rv5ITSEswHaHy&pid=Api'
    )
    this.thirdSnap = new FaceSnap(
      'Tatiana',
      'mystèrieuse et tres maquillé',
      new Date(),
      87,
      'https://tse4.mm.bing.net/th?id=OIP.dY2cR9-niZFKKAMR63RguQHaHS&pid=Api'
    )
  }
}
