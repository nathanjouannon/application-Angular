import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title! : string;
  description!: string;
  createDate! : Date;
  snaps!: number;
  imgUrl!: string;

  ngOnInit() {
    this.title = 'Archibalde';
    this.description = 'Un gentil monsieurs';
    this.createDate = new Date();
    this.snaps = 0;
    this.imgUrl = 'https://tse1.mm.bing.net/th?id=OIP.lvHuTIhKq_vQnhhrSJNkcgHaJA&pid=Api'
  }

  onAddSnap() {
    this.snaps++;
  }
}
