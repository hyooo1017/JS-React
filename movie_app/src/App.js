import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App(){
	return <BrowserRouter>
		{/* Route 안에는 매우 중요한 props가 2개 들어감
			1. 렌더링할 화면을 알려줄 path
			2. 어떤 동작을 할지 알려줄 component
		*/}

		{/* 6.1 exact={true} 추가하여 url이 path와 똑같을 때만 렌더될 수 있도록 함 */}
		{/* 6.2 네비게이션 추가 */}
		<Navigation />
		<Route path="/" exact={true} component={Home} />
		<Route path="/about" component={About} />
	</BrowserRouter>

}

export default App;