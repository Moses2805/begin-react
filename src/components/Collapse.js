import React from 'react';

class Collapse extends React.Component {

    constructor() {
        super();

        this.state = {
            showContent: false
        }
    }

    showMore = () => {
        this.setState({
            showContent : !this.state.showContent
        })
    }
    render() {

        return (
            <div>
                <button className="btn btn-outline-dark" style = {{marginLeft: 110 + 'px'}} onClick = {this.showMore}>
                    Click
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {this.props.children}
                        </div>
                    ) : null
                }

            </div>

        );
    }
};

export default Collapse;