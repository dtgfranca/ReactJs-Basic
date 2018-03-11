import React from "react";

export class Home extends React.Component{
	render(){
		var text = "something";
		console.log(this.props);
		return(
			<div>
				<p> Init my new create Component</p>
				<p> {text}</p>
				<p> Your name is {this.props.name}</p>
				<p> User Object => Name:{this.props.user.name} </p>
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby,i)=>{
							<li key={i}>hobby</li>
						})}
					</ul>
				</div>
			</div>

		);
	}

}