export class CustomMap {
  private googleMap: google.maps.Map

  constructor(mapDiv: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDiv) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }
}