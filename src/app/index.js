import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component{
	render(){
		var user = {
				name: "Ana",
				hobbies:["Sports", "Reading"]
			};
		return(			
			<div className="container">
				<div className="row">
					<Header/>
				</div>
				<p> Test</p>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Max"} age={27} user={user}/>
					</div>
				</div>
			</div>

		);

	}
}

render(<App/>, document.getElementById("app"));