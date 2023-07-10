import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnapes!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnapes = [
      {
        title: 'Paysage',
        description: 'Un paysage de montagne',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
        snapped: false,
        location: 'Alpes'
      },
      {
      title: 'Portrait',
      description: 'Un portrait de femme',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_1280.jpg",
      snapped: false,
      location: 'Paris'
      },
      {
      title: 'Un oiseau',
      description: 'Une mésange',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://cdn.pixabay.com/photo/2023/07/01/11/40/old-tree-8100015_1280.jpg",
      snapped: false
      },
      {
        title: 'Paysage',
        description: 'Un paysage de montagne',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
        snapped: false,
        location: 'Alpes'
      },
      {
      title: 'Portrait',
      description: 'Un portrait de femme',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_1280.jpg",
      snapped: false,
      location: 'Paris'
      },
      {
      title: 'Un oiseau',
      description: 'Une mésange',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://cdn.pixabay.com/photo/2023/07/01/11/40/old-tree-8100015_1280.jpg",
      snapped: false
      }
    ];
  }
}
