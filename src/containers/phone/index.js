import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhoneById } from 'actions';

class Phone extends Component {
  componentDidMount(){
    console.log(this.props);
    this.props.fetchPhoneById(this.props.match.params.id);
  }
  render() {
    return (
      <div>done</div>
    );
  }
}

const mapDispatchToProps = {
    fetchPhoneById
};

export default connect(null, mapDispatchToProps)(Phone);