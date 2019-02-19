import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';

function RenderLeader({leader}) {
	if (leader != null)
		return(
			<Media>
				<Media left href='#'>
					<Media object src={leader.image} alt={leader.name} />
				</Media>
				<Media body>
					<Media heading>
						{leader.name}
					</Media>
					{leader.designation}
					<p />
					{leader.description}
				</Media>
			</Media>
		);
	else
		return(
			<div></div>
		);
}

export default RenderLeader;