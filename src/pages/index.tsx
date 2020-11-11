import React from 'react';
import { Row } from 'react-styled-flexboxgrid';
import BaseLayout from '../layouts/BaseLayout';
import LogoWithLinks from '../components/LogoWithLinks';

export default function Home() {
  return (
    <BaseLayout>
      <Row center="xs">
        <LogoWithLinks />
      </Row>
    </BaseLayout>
  );
}
