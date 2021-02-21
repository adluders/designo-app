import LocationItem from "../components/LocationItem";

const canadaInfo = {
  countryName: "canada",
  officeName: "Designo Central Office",
  streetAddress: "3886 Wellington Street",
  cityDetails: "Toronto, Ontario M9C 3J5",
  phoneNumber: "+1 253-863-8967",
  email: "contact@designo.com",
};

const australiaInfo = {
  countryName: "australia",
  officeName: "Designo AU Office",
  streetAddress: "19 Balone Street",
  cityDetails: "New South Wales 2443",
  phoneNumber: "(02) 6720 9092",
  email: "contact@designo.au",
};

const ukInfo = {
  countryName: "united kingdom",
  officeName: "Designo UK Ofice",
  streetAddress: "13 Colorado Way",
  cityDetails: "Rhyd-y-fro SA8 9GA",
  phoneNumber: "078 3115 1400",
  email: "contact@designo.uk",
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
