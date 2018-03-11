import React from "react";
import { render } from "react-dom";

import {Header} from "./componets/Header";
import {Home} from "./componets/Header";

class App extends React.Component{
	render(){
		return(
			<div>
				<Header/>
			</div>
		);

	}
}

render(<App/>, document.getElementById("app"));