import React, { Component } from 'react';

class Landing extends Component {
    componentDidMount(){
        console.log(this.props.history);
    }
    clickHandel = ()=>{
        this.props.history.push('/editor');
    }
    render() {
        return (
            <div>
                <h1>Landing Page</h1>
                <form post="/connectToRoom">
                    <input type="text" name="roomName" />
                    <button type="submit">Join</button>
                </form>
                <button onClick={this.clickHandel}>Share</button>
            </div>
        );
    }
}

export default Landing;