import React, { useState } from 'react';
import SuspenseComponent from '../components/SuspenseComponent';
import { createResource } from '../utils/SuspenseApi';
import Container from '../ui/Container';
import Button from '../ui/Button';

const resource = createResource();
const SuspensePage = () => {
  const [ bool, setTrue ] = useState(false)
  return (
    <Container>
      <SuspenseComponent resource={resource.countries} />
      <Button onClick={() => setTrue(true)}>toggle</Button>
      {bool && (
        <SuspenseComponent resource={resource.countries} />
      )}
    </Container>
  )
}

export default SuspensePage;