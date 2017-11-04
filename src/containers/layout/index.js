import React from 'react';
import Phones from 'containers/phones';

const Layout = () => (
    <div className="view-container">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    Sidebar
                </div>
                <div className="col-md-9">
                    <Phones/>
                </div>
            </div>
        </div>
    </div>
);

export default Layout
