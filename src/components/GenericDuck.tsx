import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../redux';
import { IGenericReducer, fetchData } from '../redux/GenericReducer';
import Card from '../ui/Card';

interface PassedProps {};
interface ReduxProps {
  GenericReducer: IGenericReducer; 
  fetchData(): void;
};

type Props = PassedProps & ReduxProps;

const GenericDuck = (props: Props) => {
  const { fetchData } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <Card>
      <h1>GenericDuck</h1>
      {props.GenericReducer.data.map((item) => (
        <p>{item.name}</p>
      ))}
    </Card>
  );
}

const mapStateToProps = (props: IRootState) => {
  return {
    GenericReducer: props.GenericReducer
  }
}

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericDuck);