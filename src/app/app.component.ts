import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myFirstFaceSnap!: FaceSnap;
  mySecondFaceSnap!: FaceSnap;
  myThirdFaceSnap!: FaceSnap;

  ngOnInit(): void {
    this.myFirstFaceSnap = new FaceSnap();
    this.myFirstFaceSnap.title = 'Paysage';
    this.myFirstFaceSnap.description = 'Un paysage de montagne';
    this.myFirstFaceSnap.createdDate = new Date();
    this.myFirstFaceSnap.snaps = 0;
    this.myFirstFaceSnap.imageUrl = "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg";
    this.myFirstFaceSnap.snapped = false;
    this.myFirstFaceSnap.location = 'Alpes';

    this.mySecondFaceSnap = {
      title: 'Portrait',
      description: 'Un portrait de femme',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_1280.jpg",
      snapped: false,
      location: 'Paris'
    };

    this.myThirdFaceSnap = {
    title: 'Un oiseau',
    description: 'Une mésange',
    createdDate: new Date(),
    snaps: 0,
    imageUrl: "https://cdn.pixabay.com/photo/2023/07/01/11/40/old-tree-8100015_1280.jpg",
    snapped: false
    };
  }
}
