import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import BaseLayout from '../layouts/BaseLayout';
import DropdownCard from '../components/DropdownCard';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 64px;
`;

const BiggerParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
  text-transform: uppercase;
  word-spacing: 12px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledCol = styled(Col)`
  margin: 8px 0;
`;

const About = () => {
  return (
    <BaseLayout seo={{ title: 'About', description: 'Get to know Tim' }}>
      <Title>Hi, my name is Tim 👋</Title>

      <BiggerParagraph>I&apos;m a</BiggerParagraph>

      <Row center="xs">
        <StyledCol xs={12} md={6}>
          <DropdownCard title="Medieninformatik Student at Beuth-Hochschule (4.&nbsp;Semester)">
            Languages that we use primarily: Java, React, Node.js <br />
            Optional Courses I took: Microservices, Web Engineering
          </DropdownCard>
        </StyledCol>
        <StyledCol xs={12} md={6}>
          <DropdownCard title="Working student at ganztags. GmbH">
            <a href="https://www.ganztags.net/" target="_blank" rel="noreferrer nofollow">
              ganztags.
            </a>{' '}
            is a agency specialising in online marketing. We create websites for clients primarily using (headless)
            wordpress and gatsby/next.js. I&apos;m responsible for creating/maintaining these websites, implement the
            design correctly and making sure the website is compliant with best practices for seo, sea etc.
          </DropdownCard>
        </StyledCol>
        <StyledCol xs={12} md={3}>
          <DropdownCard title="Berliner">Born and Living 🐻</DropdownCard>
        </StyledCol>
        <StyledCol xs={12} md={6}>
          <DropdownCard title="Passionate Developer">
            I <b>love</b> javascript especially typescript. I&apos;m passionate about React and everything that has to
            do with css-in-js e.g. styled-components. Currently I&apos;m learning the ins and outs of Golang and am very
            excited about what happens in the next years in that language.
          </DropdownCard>
        </StyledCol>
        <StyledCol xs={12} md={3}>
          <DropdownCard title="Musician">Guitar and Bass 🎸</DropdownCard>
        </StyledCol>
      </Row>
    </BaseLayout>
  );
};

export default About;
