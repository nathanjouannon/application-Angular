
export class FaceSnap{
    constructor(
        public id: number,
        public title :string, 
        public description: string, 
        public createDate: Date, 
        public snaps: number,
        public imgUrl: string,
        public location?: string) {
    }
}