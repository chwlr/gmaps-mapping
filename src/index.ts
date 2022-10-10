import { User } from "./useCases/User";
import { Company } from "./useCases/Company";

const user = new User
const company = new Company

console.log(`Name: ${user.name}, Location: ${user.location.lat}, ${user.location.lng}`)
console.log(`Company Name: ${company.companyName}, Catch phrase: ${company.catchPhrase}, Location: ${company.location.lat}, ${company.location.lng}`)