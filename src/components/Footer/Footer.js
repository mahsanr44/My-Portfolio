import React from 'react';
import {
  FooterWrapper,
  SocialIconsContainer
} from './FooterStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';

import SocialMedia from "../SocialMedia/SocialMedia.component";

const Footer = () => {
  return (
    <>
    {/* <Section id="projects">
    <SectionDivider divider />
      <SectionTitle>Contact me </SectionTitle>
       */}
    <FooterWrapper>
      <SocialIconsContainer>
        <SocialMedia inFooter/>
      </SocialIconsContainer>
    </FooterWrapper>
    {/* </Section> */}
    </>
  );
};

export default Footer;
