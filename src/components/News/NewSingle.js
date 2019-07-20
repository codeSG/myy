import React from 'react';
const NewSingle = ({item}) => (
	<div>
		<div className="col s12"> </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.Name} </div>
		<div className="col s2 z-depth-2 blue lighten-4" > {item.EmailId} </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.Phone} </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.Degree} </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.University} </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.Company} </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.Experience} </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.StartTime} </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.State} </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.ResumeLink} </div>
		<div className="col s1 z-depth-2 blue lighten-4" > {item.EventId} </div>
		<div className="col s12"> </div>
				
	</div>

	);
export default NewSingle;