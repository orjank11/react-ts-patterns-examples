import React from 'react';

const SuspenseComponent = (props: { resource: { read(): any }}) => {
  const data = props.resource.read();
  return (
    <div>
      <h1>{data.vesselName} - {data.vesselId}</h1>
    </div>
  );
}

export default SuspenseComponent;