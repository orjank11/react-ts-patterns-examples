import React, { Component,  useState } from 'react';
import request from "superagent";

interface PassedProps {
  url: string;
  render: any;
}
type Props = PassedProps;

interface State {
  loading: boolean;
  data: any;
}

class Resource extends Component<Props, State>{
  state = {
    loading: true,
    data: null
  }

  componentDidMount() {
    request
      .get(this.props.url)
      .then((result) => {
        this.setState({ loading: false, data: result.body });
      })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading....</div>
    }
    return this.props.render(this.state.data);
  }
}

export default Resource;