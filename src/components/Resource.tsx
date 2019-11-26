import React, { Component, useState, useEffect } from 'react';
import request from "superagent";
import Spinner from '../ui/Spinner';

interface PassedProps {
  url: string;
  render: any;
}
type Props = PassedProps;

const Resource = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    request
      .get(props.url)
      .then((res) => {
        setData(res.body);
        setLoading(false);
      })
      .catch((error) => {

      });
  }, [])

  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <p>Not working :(</p>
  }
  return props.render(data);
}


// interface State {
//   loading: boolean;
//   data: any;
// }

// class Resource extends Component<Props, State>{
//   state = {
//     loading: true,
//     data: null
//   }

//   componentDidMount() {
//     request
//       .get(this.props.url)
//       .then((result) => {
//         this.setState({ loading: false, data: result.body });
//       })
//   }

//   render() {
//     if (this.state.loading) {
//       return <Spinner />
//     }
//     return this.props.render(this.state.data);
//   }
// }

export default Resource;