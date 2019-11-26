import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import UseState from '../components/UseState';
import UseReducer from '../components/UseReducer';

const HooksPage = () => {
  const [tab, setTab] = useState<'useState' | 'useReducer'>('useState')
  return (
    <Container>
      <h1>Hooks</h1>
      <Button intent={tab === "useState" ? "primary" : "default"} onClick={() => setTab('useState')}>useState</Button>
      <Button intent={tab === "useReducer" ? "primary" : "default"} onClick={() => setTab('useReducer')}>useReducer</Button>
      {tab === "useState" && (
        <UseState />
      )}
      {tab === "useReducer" && (
        <UseReducer />
      )}
    </Container>
  )
}

export default HooksPage;