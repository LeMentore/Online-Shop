import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPhones } from 'actions';

class Phones extends Component{
    componentDidMount(){
        this.props.fetchPhones()
    }
    render(){
        return(
            <div>
                Phones
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchPhones
};

export default connect(null, mapDispatchToProps)(Phones)

/*
* В mapDispatchToProps мы используем сокращенную форму записи, и когда fetchPhones
* попадает с помощью mapDispatchToProps в connect, то в props прокидывается этот екшен,
* который оборачивается в dispatch.
* */