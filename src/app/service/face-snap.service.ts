import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibalde',
            description: 'Un gentil monsieurs',
            createDate: new Date(),
            snaps: 10,
            imgUrl: 'https://tse1.mm.bing.net/th?id=OIP.lvHuTIhKq_vQnhhrSJNkcgHaJA&pid=Api',
            location: 'Angers'
        },
        {
            id: 2,
            title: 'Olivio',
            description: `nan il n'aime pas les olives`,
            createDate: new Date(),
            snaps: 170,
            imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.UMoOEVPN7LD05Rv5ITSEswHaHy&pid=Api',
            location: 'BG world'
        },
        {
            id: 3,
            title: 'Tatiana',
            description: 'mystèrieuse et tres maquillé',
            createDate: new Date(),
            snaps: 250,
            imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.dY2cR9-niZFKKAMR63RguQHaHS&pid=Api',
        },
        {
            id: 4,
            title: 'Archibalde',
            description: 'Un gentil monsieurs',
            createDate: new Date(),
            snaps: 3,
            imgUrl: 'https://tse1.mm.bing.net/th?id=OIP.lvHuTIhKq_vQnhhrSJNkcgHaJA&pid=Api',
            location: 'Angers'
        },
        {
            id: 5,
            title: 'Olivio',
            description: `nan il n'aime pas les olives`,
            createDate: new Date(),
            snaps: 1,
            imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.UMoOEVPN7LD05Rv5ITSEswHaHy&pid=Api',
            location: 'BG world'
        },
        {
            id: 6,
            title: 'Tatiana',
            description: 'mystèrieuse et tres maquillé',
            createDate: new Date(),
            snaps: 87,
            imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.dY2cR9-niZFKKAMR63RguQHaHS&pid=Api',
        },
        
    ]

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const facesnap = this.faceSnaps.find(facesnap => facesnap.id === faceSnapId)
        if (!facesnap) {
            throw new Error(' facesnap not found')
        } else {
            return facesnap
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const facesnap = this.getFaceSnapById(faceSnapId)
        snapType === 'snap' ?  facesnap.snaps++ : facesnap.snaps--;
    }
}