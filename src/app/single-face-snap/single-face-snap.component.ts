import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  buttonSnap!: string;
  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonSnap = "Oh Snap!";

    const id = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(+id);
  }

  onToggleSnap() {
    if (this.faceSnap.snapped) {
      this.buttonSnap = "Oh Snap!";
    } else {
      this.buttonSnap = "Oops, un Snap!";
    }

    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
  }
}
