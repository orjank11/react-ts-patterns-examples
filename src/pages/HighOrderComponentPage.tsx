import React, { useState } from 'react';
import FormAdvanced from '../components/FormAdvanced';
import FormEasy from '../components/FormEasy';
import Container from '../ui/Container';
import { H1 } from '../ui/Typography';
import Button from '../ui/Button';

const HighOrderComponentPage = () => {
  const [ tab, setTab ] = useState<'easy' | 'advanced'>('easy')
  return (
    <Container>
      <H1>Higher order component</H1>
      <p>In this example we use form as an example of how to deal with higher order component</p>
      <Button intent={tab === "easy" ? "primary" : "default"} onClick={() => setTab("easy")}>easy</Button>
      <Button intent={tab === "advanced" ? "primary" : "default"}  onClick={() => setTab("advanced")}>advanced</Button>
      {tab === 'easy' && (
        <FormEasy />
      )}
      {tab === 'advanced' && (
        <FormAdvanced />
      )}
    </Container>
  )
}

export default HighOrderComponentPage;