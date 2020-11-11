import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import BaseLayout from '../layouts/BaseLayout';
import DropdownCard from '../components/DropdownCard';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 48px;
`;

const BiggerParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-transform: uppercase;
  word-spacing: 12px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledCol = styled(Col)`
  margin: 8px 0;
`;

const About = () => {
  return (
    <BaseLayout>
      <Title>Hi, my name is Tim 👋</Title>

      <BiggerParagraph>I&apos;m a</BiggerParagraph>

      <Row center="xs">
        <StyledCol xs={12} md={6}>
          <DropdownCard title="Student at Beuth-Hochschule Medieninformatik (4. Semester">Hello</DropdownCard>
        </StyledCol>
        <StyledCol xs={12} md={6}>
          <DropdownCard title="Werkstudent at ganztags. GmbH">Hello</DropdownCard>
        </StyledCol>
        <StyledCol xs={12} md={6}>
          <DropdownCard title="Werkstudent at ganztags. GmbH">Hello</DropdownCard>
        </StyledCol>
      </Row>
    </BaseLayout>
  );
};

export default About;
