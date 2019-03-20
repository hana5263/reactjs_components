import React from 'react';

import { Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function RenderLeader({leader}) {
	if (leader != null)
		return(
			<Media>
				<Media left href='#'>
					<Media object src={baseUrl + leader.image} alt={leader.name} />
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