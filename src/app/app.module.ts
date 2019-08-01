import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Module (all imports)
import { MaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapEditComponent } from './components/map/map-edit.component';

// Angular Maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  entryComponents: [
    MapEditComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      'apiKey': 'AIzaSyDOn2jZ1P-nc9r3PmFoYz4O4KK9QsLFUuk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
