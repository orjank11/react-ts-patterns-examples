import React from 'react';
import Resource from '../components/Resource';

const RenderPropsPage = () => {

  return (
    <div>
      <h1>RenderProps</h1>
      <Resource url='/api/path' render={(data: any) => (
      <h1>{data.vesselName} - {data.vesselId}</h1>

      )} />
    </div>
  )
}

export default RenderPropsPage;