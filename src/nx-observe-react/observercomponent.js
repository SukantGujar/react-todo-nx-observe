import React, {Component} from "react"
import observer from "@risingstack/nx-observe"

export default (Wrapped) => class extends Component{
    state = {}
    componentDidMount(){
        this.signal = observer.observe(this.observer.bind(this));
    }
    componentWillUnmount(){
        observer.unobserve(this.signal);
    }
    observer(){
        let {state, mapStateToProps} = this.props;
        this.setState({
            "ready" : true, 
            "props": mapStateToProps(state)
        });
    }
    render(){
        //return <div>{JSON.stringify(this.props)}</div>;
        return (!!this.state.ready && <Wrapped {...this.state.props}>{this.props.children}</Wrapped>);
    };
};