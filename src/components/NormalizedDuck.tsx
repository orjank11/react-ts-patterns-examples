import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../redux';
import { INormalizedDataReducer, fetchDataList, fetchDataDetails } from '../redux/NormalizedDataReducer';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Flex } from '../ui/Flex';
import { List, ListItem } from '../ui/List';

interface PassedProps {};
interface ReduxProps {
  NormalizedReducer: INormalizedDataReducer; 
  fetchDataList(): void;
  fetchDataDetails(key: string): void;
};

type Props = PassedProps & ReduxProps;

const NormalizedDuck = (props: Props) => {
  const { fetchDataList, NormalizedReducer, fetchDataDetails } = props;
  useEffect(() => fetchDataList(),[])

  return (
    <Card>
      <h1>NormalizedDuck</h1>
      <List>
        {NormalizedReducer.list.map((item) => {
          return (
            <ListItem>
              <Flex 
                alignItems="center" 
                justifyContent="space-between"
              >
                <b>{item.name} - {item.alpha3Code}</b> 
                <Button intent="default" onClick={() => fetchDataDetails(item.alpha2Code)}>view</Button>
              </Flex>
            {NormalizedReducer.details[item.alpha2Code] && (
              <div>Capital: {NormalizedReducer.details[item.alpha2Code].capital}</div>
            )}
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}

const mapStateToProps = (props: IRootState) => ({
    NormalizedReducer: props.NormalizedDataReducer
});

const mapDispatchToProps = {
  fetchDataList,
  fetchDataDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalizedDuck);