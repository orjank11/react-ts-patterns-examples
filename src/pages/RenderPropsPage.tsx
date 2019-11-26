import React from 'react';
import Resource from '../components/Resource';
import Container from '../ui/Container';
import { CountryDetails } from '../types';

const RenderPropsPage = () => {

  return (
    <Container>
      <h1>RenderProps</h1>
      <Resource 
        url='/api/alpha/co' 
        render={(data: CountryDetails) => (
          <h1>{data.name} - {data.capital}</h1>
        )} 
      />
    </Container>
  )
}

export default RenderPropsPage;