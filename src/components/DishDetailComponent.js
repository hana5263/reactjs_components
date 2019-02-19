import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

	function RenderDish({dish}) {
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

	function RenderComments({comments}) {
		if (comments != null) {
			const comment = comments.map((comment) => {
				return (
					<ul className="list-unstyled" key={comment.id}>
						<li>{comment.comment}</li>
						<li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
					</ul>
				);
			});
			return(
				<div>
					<div className="row">
						<h4>Comments</h4>
					</div>
					<div className="row">
						{comment}
					</div>
				</div>
			);
		}
		else
			return(
				<div></div>
			);
	}

    const DishDetail = (props) => {
        if (props.dish != null) {
            return(
			<div class="container">
			  <div className="column">
				<div className="row">
                  <div className="col-12 col-md-5 m-1">
					<RenderDish dish={props.dish} />
				  </div>
				  <div className="col-12 col-md-5 m-1">
					<RenderComments comments={props.dish.comments} />
                  </div>
                </div>
			  </div>
			</div>
            );
        } else
            return(
                <div></div>
            );
    }

export default DishDetail;