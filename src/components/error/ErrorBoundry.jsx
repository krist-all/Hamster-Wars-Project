import { Component } from 'react';
import './ErrorBoundry.css'
class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return{
            hasError: true
        }
    }
    render(){
        if (this.state.hasError){
            return <div className="error-container"><h3>Something went wrong...</h3><br/><p>Please reload the page!</p></div>
        }
        return this.props.children
      
    }
}

export default ErrorBoundry;