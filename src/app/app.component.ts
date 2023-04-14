import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  facesnaps!: FaceSnap[];

  ngOnInit() {
    this.facesnaps = [
      {
        title: 'Archibalde',
        description: 'Un gentil monsieurs',
        createDate: new Date(),
        snaps: 10,
        imgUrl: 'https://tse1.mm.bing.net/th?id=OIP.lvHuTIhKq_vQnhhrSJNkcgHaJA&pid=Api',
        location: 'Angers'
      },
      {
        title: 'Olivio',
        description: `nan il n'aime pas les olives`,
        createDate: new Date(),
        snaps: 170,
        imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.UMoOEVPN7LD05Rv5ITSEswHaHy&pid=Api',
        location: 'BG world'
      },
      {
        title: 'Tatiana',
        description: 'mystèrieuse et tres maquillé',
        createDate: new Date(),
        snaps: 250,
        imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.dY2cR9-niZFKKAMR63RguQHaHS&pid=Api',
      },
      {
        title: 'Archibalde',
        description: 'Un gentil monsieurs',
        createDate: new Date(),
        snaps: 3,
        imgUrl: 'https://tse1.mm.bing.net/th?id=OIP.lvHuTIhKq_vQnhhrSJNkcgHaJA&pid=Api',
        location: 'Angers'
      },
      {
        title: 'Olivio',
        description: `nan il n'aime pas les olives`,
        createDate: new Date(),
        snaps: 1,
        imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.UMoOEVPN7LD05Rv5ITSEswHaHy&pid=Api',
        location: 'BG world'
      },
      {
        title: 'Tatiana',
        description: 'mystèrieuse et tres maquillé',
        createDate: new Date(),
        snaps: 87,
        imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.dY2cR9-niZFKKAMR63RguQHaHS&pid=Api',
      },
      
    ]
  }
}
