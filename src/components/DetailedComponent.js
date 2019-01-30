import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

	renderDish(dish) {
		if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );		
	}
	
    render() {
        if (this.props.dish != null) {
            return(
			<div className="column">
				<div className="row">
                  <div className="col-12 col-md-5 m-1">
					{this.renderDish(this.props.dish)}
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