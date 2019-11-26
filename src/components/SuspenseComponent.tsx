import React from 'react';
import { CountryList } from '../types';

const SuspenseComponent = (props: { resource: { read(): any }}) => {
  const data: CountryList[] = props.resource.read();
  return (
    <div>
      <h1>Suspense</h1>
      {data.map((item) => {
        return (
          <p>{item.name}</p>
        );
      })}
    </div>
  );
}

export default SuspenseComponent;