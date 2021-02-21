import styled from "styled-components";

const LocationItemWrapper = styled.section`
  display: flex;
  flex-direction: ${({ reversed }) => reversed && "row-reverse"};
  gap: 1rem;

  margin: 1rem auto;
  border-radius: 1rem;
`;

const LocationDetails = styled.div`
  flex-grow: 2;
  background-color: #fdf3f0;
  border-radius: 1rem;

  padding: 5rem 6rem;
`;

const LocationHeading = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: #e7816b;
  text-transform: capitalize;
`;

const LocationInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0 1rem;
`;

const LocationInfo = styled.p`
  color: #333136;
`;

const LocationMap = styled.div`
  background-color: green;
  flex-grow: 1.5;
`;

const LocationItem = ({ countryInfo, reversed }) => {
  const {
    countryName,
    officeName,
    streetAddress,
    cityDetails,
    phoneNumber,
    email,
  } = countryInfo;

  return (
    <LocationItemWrapper reversed={reversed}>
      <LocationDetails>
        <LocationHeading>{countryName}</LocationHeading>

        <LocationInfoWrapper>
          <LocationInfo>{officeName}</LocationInfo>
          <LocationInfo>{streetAddress}</LocationInfo>
          <LocationInfo>{cityDetails}</LocationInfo>
          <LocationInfo>Contact</LocationInfo>
          <LocationInfo>P: {phoneNumber}</LocationInfo>
          <LocationInfo>M: {email}</LocationInfo>
        </LocationInfoWrapper>
      </LocationDetails>

      <LocationMap></LocationMap>
    </LocationItemWrapper>
  );
};

export default LocationItem;
