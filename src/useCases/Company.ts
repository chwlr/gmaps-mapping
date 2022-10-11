import faker from 'faker'

export class Company {
  companyName: string
  catchPhrase: string
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent() {
    return `
      <div>
        <h3>Company name: ${this.companyName}</h6>
        <h6>Catch phrase: ${this.catchPhrase}</h6>
      </div>
    `
  }
}