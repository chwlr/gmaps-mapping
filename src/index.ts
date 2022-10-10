import { CustomMap } from "./useCases/CustomMap"
import { User } from "./useCases/User"
import { Company } from "./useCases/Company"

const customMap = new CustomMap('map')
const user = new User
const company = new Company

customMap.addMarker(user)
customMap.addMarker(company)

