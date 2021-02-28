import styled from "styled-components";
import ContentBox from "../components/global/ContentBox";
import Banner, {
  BannerHeading,
  BannerSubHeading,
} from "../components/global/Banner";

import Australia from "../assets/shared/desktop/illustration-australia.svg";
import Canada from "../assets/shared/desktop/illustration-canada.svg";
import UnitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";
import { Button } from "../components/global/Button";

const ContactBannerWrapper = styled(Banner)`
  margin-bottom: 10rem;
  padding: 3.75rem 8rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;

  @media screen and (max-width: 768px) {
    padding: 3.5rem 4.5rem;
  }

  @media screen and (max-width: 414px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

const ContactContentWrapper = styled.div`
  @media screen and (max-width: 414px) {
    padding: 3.5rem 4.5rem;
  }
`;

const ContactHeading = styled(BannerHeading)``;

const ContactSubHeading = styled(BannerSubHeading)`
  text-align: left;
  width: 100%;
  line-height: 1.8rem;
`;

const ContactForm = styled.form`
  @media screen and (max-width: 414px) {
    width: 80%;
  }
`;

const ContactFormGroup = styled.div`
  margin: 1.5rem 0;
  display: flex;
  &:last-of-type {
    justify-content: flex-end;
  }
  @media screen and (max-width: 414px) {
    &:last-of-type {
      justify-content: center;
    }
  }
`;

const ContactInputLabel = styled.label``;

const ContactInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding-bottom: 1rem;
  background-color: transparent;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  letter-spacing: 1px;
  &::placeholder {
    color: #fff;
  }
`;

const ContactMessage = styled.textarea`
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;

  width: 100%;
  resize: none;
  &::placeholder {
    color: #fff;
  }
`;

const companyContents = [
  {
    id: 0,
    graphic: Australia,
    header: "Australia",
    details: "see location",
  },
  {
    id: 1,
    graphic: Canada,
    header: "Cananda",
    details: "see location",
  },
  {
    id: 2,
    graphic: UnitedKingdom,
    header: "united kingdom",
    details: "see location",
  },
];

const Contact = () => {
  return (
    <main>
      <ContactBannerWrapper>
        <ContactContentWrapper>
          <ContactHeading>Contact Us </ContactHeading>
          <ContactSubHeading>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </ContactSubHeading>
        </ContactContentWrapper>

        <ContactForm>
          <ContactFormGroup>
            <ContactInputLabel htmlFor="name"></ContactInputLabel>
            <ContactInput required name="name" type="text" placeholder="Name" />
          </ContactFormGroup>

          <ContactFormGroup>
            <ContactInputLabel htmlFor="emeail"></ContactInputLabel>
            <ContactInput
              type="email"
              required
              name="email"
              placeholder="Email Address"
            />
          </ContactFormGroup>

          <ContactFormGroup>
            <ContactInputLabel htmlFor="phone-number"></ContactInputLabel>
            <ContactInput
              type="tel"
              required
              name="phone-number"
              placeholder="Phone"
            />
          </ContactFormGroup>

          <ContactFormGroup>
            <ContactInputLabel htmlFor="message"></ContactInputLabel>
            <ContactMessage
              required
              name="message"
              rows="10"
              placeholder="Your Message"
            />
          </ContactFormGroup>

          <ContactFormGroup>
            <Button as="button" type="submit">
              submit
            </Button>
          </ContactFormGroup>
        </ContactForm>
      </ContactBannerWrapper>

      <ContentBox containButton contents={companyContents} />
    </main>
  );
};

export default Contact;
