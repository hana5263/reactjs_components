import React, { Component } from 'react';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.dish != null) {
            return(
			<div className="column">
				<div className="row">
                  <div className="col-12 col-md-5 m-1">
				  </div>
				</div>
				<div className="row">
                  <div className="col-12 col-md-5 m-1">
                  </div>
                </div>
			</div>
            );
        } else
            return(
                <div></div>
            );
    }
}

export default DishDetail;