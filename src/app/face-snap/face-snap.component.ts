import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonSnap!: string;
  constructor(private faceSnapsService : FaceSnapsService) { }

  ngOnInit(): void {
    this.buttonSnap = "Oh Snap!";
  }

  onToggleSnap(){
    if(this.faceSnap.snapped) {
      this.buttonSnap = "Oh Snap!";
    } else {
      this.buttonSnap = "Oops, un Snap!";
    }

    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
  }
}
