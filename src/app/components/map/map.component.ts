import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapEditComponent } from './map-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat: number = 41.54698288;
  lng: number = 2.108561167;

  constructor(public _snackBar: MatSnackBar,
              public _dialog: MatDialog) {
    this.loadStorage();
  }

  ngOnInit() { }

  addMarker( event ) {
    const coords: {lat: number, lng: number } = event.coords;
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.saveStorage();
    this.showNewSnackBar('New marker added!', 'close');
    //console.log(this.markers);
  }

  deleteMarker( index: number ) {
    this.markers.splice(index, 1);
    this.saveStorage();
    this.showNewSnackBar('Marked deleted!', 'close');
  }

  editMarker( marker: Marker ) {
    const dialogRef = this._dialog.open(MapEditComponent, {
      width: '250px',
      data: {title: marker.title, desc: marker.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result);
      if (!result) {
        return;
      }

      marker.title = result.title;
      marker.desc = result.desc;

      this.saveStorage();
      this.showNewSnackBar('Marker updated!', 'close');

    });


  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  loadStorage() {
    if(localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  showNewSnackBar( message: string, actionName?: string, duration?: number) {
    // Simple message with an actionName.
    if(duration == null || duration == undefined) {
      duration = 2000;
    }
    const snackBarRef = this._snackBar.open(message, actionName, { duration: duration });
  }

}
