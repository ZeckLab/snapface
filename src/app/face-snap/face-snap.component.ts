import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonSnap!: string;
  constructor(private faceSnapsService : FaceSnapsService,
              private route: Router) { }

  ngOnInit(): void {
    this.buttonSnap = "Oh Snap!";
  }

  onViewFaceSnap(): void {
    this.route.navigateByUrl('/faceSnaps/' + this.faceSnap.id);
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
