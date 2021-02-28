import LocationItem from "../components/LocationItem";

import AustraliaMap from "../assets/locations/desktop/image-map-australia.png";
import CanadaMap from "../assets/locations/desktop/image-map-canada.png";
import UkMap from "../assets/locations/desktop/image-map-united-kingdom.png";

import MobileAusMap from "../assets/locations/tablet/image-map-australia.png";
import MobileCanadaMap from "../assets/locations/tablet/image-map-canada.png";
import MobileUkMap from "../assets/locations/tablet/image-map-uk.png";

const canadaInfo = {
  countryName: "canada",
  officeName: "Designo Central Office",
  streetAddress: "3886 Wellington Street",
  cityDetails: "Toronto, Ontario M9C 3J5",
  phoneNumber: "+1 253-863-8967",
  email: "contact@designo.com",
  deskMap: CanadaMap,
  mobileMap: MobileCanadaMap,
};

const australiaInfo = {
  countryName: "australia",
  officeName: "Designo AU Office",
  streetAddress: "19 Balone Street",
  cityDetails: "New South Wales 2443",
  phoneNumber: "(02) 6720 9092",
  email: "contact@designo.au",
  deskMap: AustraliaMap,
  mobileMap: MobileAusMap,
};

const ukInfo = {
  countryName: "united kingdom",
  officeName: "Designo UK Ofice",
  streetAddress: "13 Colorado Way",
  cityDetails: "Rhyd-y-fro SA8 9GA",
  phoneNumber: "078 3115 1400",
  email: "contact@designo.uk",
  deskMap: UkMap,
  mobileMap: MobileUkMap,
};

const Locations = () => {
  return (
    <main>
      <LocationItem countryInfo={canadaInfo} />
      <LocationItem reversed countryInfo={australiaInfo} />
      <LocationItem countryInfo={ukInfo} />
    </main>
  );
};

export default Locations;
