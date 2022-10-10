import { User } from "./useCases/User";
import { Company } from "./useCases/Company";
// import * as L from 'leaflet'

const user = new User
const company = new Company

console.log(`Name: ${user.name}, Location: ${user.location.lat}, ${user.location.lng}`)
console.log(`Company Name: ${company.companyName}, Catch phrase: ${company.catchPhrase}, Location: ${company.location.lat}, ${company.location.lng}`)

const mapDiv = document.getElementById("map") as HTMLElement

const map = new google.maps.Map(mapDiv, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
})

console.log(map)

// const map = L.map(mapDiv).setView([0, 0], 20)
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 1,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map)
