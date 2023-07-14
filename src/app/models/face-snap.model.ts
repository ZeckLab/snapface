/* Description possibility to create a new FaceSnap object with the following properties:
export class FaceSnap {
    constructor(public title: string,
                public description: string,
                public createdDate: Date,
                public snaps: number,
                public imageUrl: string,
                public snapped: boolean) {

    }
}*/

export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    createdDate!: Date;
    snaps!: number;
    imageUrl!: string;
    snapped!: boolean;
    location?: string;
}
