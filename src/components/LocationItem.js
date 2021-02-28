// import { useEffect } from "react";
import styled from "styled-components";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const LocationItemWrapper = styled.section`
  display: flex;
  flex-direction: ${({ reversed }) => reversed && "row-reverse"};
  gap: 1rem;

  margin: 1rem auto;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LocationDetails = styled.div`
  flex-grow: 2;
  background-color: #fdf3f0;
  border-radius: 1rem;

  padding: 5rem 6rem;

  @media screen and (max-width: 768px) {
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;

const LocationHeading = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: #e7816b;
  text-transform: capitalize;

  @media screen and (max-width: 414px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const LocationInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 1rem;

  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.8rem;
  }
`;

const LocationInfo = styled.p`
  color: #333136;
  line-height: 25px;
`;

const LocationMap = styled.div`
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
    longitude,
    latitude,
  } = countryInfo;

  let token;

  if (process.env.NODE_ENV !== "production") {
    token = process.env.REACT_APP_TOKEN;
  } else {
    token = process.env.TOKEN;
  }

  const Map = ReactMapboxGl({
    accessToken: `${token}`,
  });

  // useEffect(() => {
  //   console.log(token);
  // }, [token]);

  return (
    <LocationItemWrapper reversed={reversed}>
      <LocationDetails>
        <LocationHeading>{countryName}</LocationHeading>

        <LocationInfoWrapper>
          <div>
            <LocationInfo>{officeName}</LocationInfo>
            <LocationInfo>{streetAddress}</LocationInfo>
            <LocationInfo>{cityDetails}</LocationInfo>
          </div>
          <div>
            <LocationInfo>Contact</LocationInfo>
            <LocationInfo>P: {phoneNumber}</LocationInfo>
            <LocationInfo>M: {email}</LocationInfo>
          </div>
        </LocationInfoWrapper>
      </LocationDetails>

      <LocationMap>
        <Map
          // eslint-disable-next-line react/style-prop-object
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100%",
            width: "100%",
          }}
          center={[longitude, latitude]}
          zoom={[13]}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[longitude, latitude]} />
          </Layer>
        </Map>
      </LocationMap>
    </LocationItemWrapper>
  );
};

export default LocationItem;
