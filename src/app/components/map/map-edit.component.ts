import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    public _fb: FormBuilder,
    public dialogRef: MatDialogRef<MapEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      // We already receiving the data from the "marker clicked"
      // Creates the form
      this.formGroup = _fb.group({
        'title': data.title,
        'desc' : data.desc
      });

      console.log(data);
    }

  ngOnInit() {  }

  saveChanges() {
    this.dialogRef.close(this.formGroup.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
