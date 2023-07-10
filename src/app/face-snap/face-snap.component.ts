import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonSnap!: string;

  ngOnInit(): void {
    this.buttonSnap = "Oh Snap!";
  }

  onToggleSnap(){
    if(this.faceSnap.snapped) {
      this.buttonSnap = "Oh Snap!";
      this.faceSnap.snaps--;
    } else {
      this.buttonSnap = "Oops, un Snap!"
      this.faceSnap.snaps++;
    }

    this.faceSnap.snapped = !this.faceSnap.snapped;
  }
}
