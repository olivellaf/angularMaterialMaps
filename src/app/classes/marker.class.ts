

export class Marker {

  public lat;
  public lng;

  public title: string = "No title";
  public desc: string = "No description";

  constructor(private latitude: number, private longitude: number ) {
    this.lat = latitude;
    this.lng = longitude;
  }

}
