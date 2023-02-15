import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
       <code>I'm here to</code> <br />
Build digital experiences that are captivate and inspiring. <br />
Design functional and beautiful websites as per requirements. <br />
Transfor ideas to intuitive and user-friendly web solutions. <br />
Bring your vision to life through clean and elegant web design. <br />
Manage your Big Data by Designing effective Databases. <br />
Create API's for the backend of your Mobile Applications.
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;