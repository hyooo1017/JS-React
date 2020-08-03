import React from 'react';

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push("/");
		}
	}
	render() {
		const { location } = this.props;
		if (location.state) {
			console.log(location.state)
			return (
				<div style={{ marginLeft: "10%", marginRight: "10%" }}>
					<img src={location.state.poster} alt={location.state.title} title={location.state.title} align="left" vspace="20" hspace="10" />
					<h2> {location.state.title} </h2>
					<h4> {location.state.year} </h4>
					<ul>
						{location.state.genres.map((genre, index) =>
							<li key={index} style={{ listStyleType: "none", float: "left", marginRight: "15px" }}>{genre}</li>
						)}
					</ul><br></br>
					<p> {location.state.summary} </p>
				</div>
		);
		} else {
			return null;
		}
	}
}

export default Detail;