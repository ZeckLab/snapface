import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: "root"
})
export class FaceSnapsService {
    faceSnapes: FaceSnap[] = [
        {
            id: 1,
            title: 'Paysage',
            description: 'Un paysage de montagne',
            createdDate: new Date(),
            snaps: 100,
            imageUrl: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
            snapped: false,
            location: 'Alpes'
        },
        {
            id: 2,
            title: 'Portrait',
            description: 'Un portrait de femme',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: "https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_1280.jpg",
            snapped: false,
            location: 'Paris'
        },
        {
            id: 3,
            title: 'Un oiseau',
            description: 'Une mésange',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: "https://cdn.pixabay.com/photo/2023/07/01/11/40/old-tree-8100015_1280.jpg",
            snapped: false
        },
        {
            id: 4,
            title: 'Paysage',
            description: 'Un paysage de montagne',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
            snapped: false,
            location: 'Alpes'
        },
        {
            id: 5,
            title: 'Portrait',
            description: 'Un portrait de femme',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: "https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_1280.jpg",
            snapped: false,
            location: 'Paris'
        },
        {
            id: 6,
            title: 'Un oiseau',
            description: 'Une mésange',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: "https://cdn.pixabay.com/photo/2023/07/01/11/40/old-tree-8100015_1280.jpg",
            snapped: false
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnapes;
    }

    getFaceSnapById(id: number): FaceSnap {
        const faceSnap = this.faceSnapes.find(
            (faceSnap) => faceSnap.id === id
        );
        if (!faceSnap) {
            throw new Error("FaceSnap not found");
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(id: number): void {
        const faceSnap = this.getFaceSnapById(id);
        faceSnap.snapped ? faceSnap.snaps-- : faceSnap.snaps++;
        faceSnap.snapped = !faceSnap.snapped;
    }
}