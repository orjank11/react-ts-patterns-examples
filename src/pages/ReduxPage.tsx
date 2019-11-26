import React, { useState } from 'react';
import GenericDuck from '../components/GenericDuck';
import NormalizedDuck from '../components/NormalizedDuck';
import Container from '../ui/Container';
import Button from '../ui/Button';

const ReduxPage = () => {
  const [ tab, setTab ] = useState<'duck' | 'normalized'>('duck') 
  return (
    <Container>
      <h1>Redux</h1>
      <Button intent={tab === 'normalized' ? 'default' : 'flat'} onClick={() => setTab('duck')}>duck</Button>
      <Button intent={tab === 'duck' ? 'default' : 'flat'}  onClick={() => setTab('normalized')}>Normalized duck</Button>
      {tab === 'duck' && (
        <GenericDuck />
      )}
      {tab === 'normalized' && (
        <NormalizedDuck />
      )}
    </Container>
  )
}

export default ReduxPage;