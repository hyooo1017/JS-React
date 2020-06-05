import React from 'react';

// App 클래스는 React 클래스로부터  컴포넌트로부터 모든 것을 가져옴
class App extends React.Component{
	state = {
		count: 0
	};
	// 자바스크립트 코드(리액트 코드 아님)
	add = () => {
		// this.setState({ count: this.state.count + 1 });			// 동작은 잘 하지만 좋지 않은 코드
		this.setState(current => ({ count: current.count + 1 }));	// 함수 방식으로 현재 state값 가져옴
	};
	minus = () => {
		// this.setState({ count: this.state.count - 1 });
		this.setState(current => ({ count: current.count - 1 }));
	};

	componentDidMount(){
		console.log("component rendered");
	}

	componentDidUpdate(){
		console.log("I just updated");
	}

	componentWillUnmount(){
		console.log("Goodbye")
	}
	
	render(){
		console.log("I'm redering");
		return (
			<div>
				<h1>The number is :  {this.state.count}</h1>
				{/* 
				 /* 리액트에서는 button에 onClick prop 기본 제공
				 /* -> 즉시 함수 호출하는 것이 아닌 버튼을 클릭했을 때만 함수가 호출되기 원하므로
				 /*    this.add()가 아닌 this.add로 사용
				 */}
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		)
	}
}

export default App;