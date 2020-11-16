import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return (
                <>
                    <h4>{location.state.title}</h4>
                    <img src={location.state.poster}/>
                    <p>
                        {location.state.summary}
                    </p>
                </>
            )
        }else{
            return null;
        }
    }
}

export default Detail;