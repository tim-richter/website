import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import BaseLayout from '../layouts/BaseLayout';
import TeaserCard from '../components/TeaserCard';

const Work = () => {
  return (
    <BaseLayout>
      <Grid>
        <Row center="xs">
          <Col xs={12} md={8}>
            <TeaserCard title="Amazon Associates" description="Bla work" href="/work/project/amazon" />
          </Col>
        </Row>
      </Grid>
    </BaseLayout>
  );
};

export default Work;
