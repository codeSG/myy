import React from 'react';
const NewSingle = ({item}) => (
	<div>
		<div className="col s12"> </div>
		<div className="col s4 z-depth-2 blue lighten-4" > {item.title} </div>
		<div className="col s4 z-depth-2 blue lighten-4" > {item.author} </div>
		<div className="col s4 z-depth-2 blue lighten-4" > {item.publishedAt} </div>
		
		<div className="col s12"> </div>
				
	</div>

	);
export default NewSingle;