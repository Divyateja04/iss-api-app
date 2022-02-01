import React from 'react';

export default class Body extends React.Component {
    constructor() {
		super();
		this.state = {
            latitude: '',
            longitude: ''
        }
	}

    componentDidMount () {
            fetch("https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json", {
                method: "GET",
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
              })
            .then(resp => resp.json())
            .then(data => {
                this.setState({latitude: data["iss_position"]["latitude"]});
                this.setState({longitude: data["iss_position"]["longitude"]})
            })
            .catch(err => {
                this.setState({latitude: "Sorry, Error Occurred"});
                this.setState({longitude: "Sorry, Error Occurred"})
                console.log(err.message);
            });;
    }

    render() {

        console.log(this.state);
        return (
            <div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-sm-12">
                            <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="nasa logo" />
                            <h3>This is a react app designed to tell you the exact coordinates of the international Space Station</h3>
                            <h1>Current Longitude is: {this.state.longitude}</h1>
                            <br />
                            <h1>Current Latitude is: {this.state.latitude}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
