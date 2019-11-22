import React, { Suspense } from 'react';
import SuspenseComponent from '../components/SuspenseComponent';
import { createResource } from '../utils/SuspenseApi';

const resource = createResource();
const SuspensePage = () => {

  return (
    <div>
      <SuspenseComponent resource={resource.emissionreporting} />
    </div>
  )
}

export default SuspensePage;