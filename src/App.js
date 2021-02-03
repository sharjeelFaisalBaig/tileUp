import React, { Component } from 'react';
import swal from 'sweetalert';
import axios from "axios";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./Home";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Checkout from "./Checkout";
import CheckoutSelect from "./CheckoutSelect";
import Step4 from "./Step4";
import EditPicture from "./EditPicture";
import { API } from './API';
import './App.css';
import { render } from '@testing-library/react';
const historyCustom = createBrowserHistory();
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reachStep3: false,

        }
    }
    componentDidMount() {
        // window.addEventListener('resize', () => window.location.reload());
    }
    render() {
        return (
            <>
                <Router>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route exact path="/step1" >
                        <Step1 />
                    </Route>
                    <Route exact path="/step2/:product" render={props => <Step2 {...props} />}>
                    </Route>
                    <Route exact path="/step2" render={props => <Step2 {...props} />}>
                    </Route>
                    <Route exact path="/step3/:name/:email" render={props => <Step3 {...props} />}>
                    </Route>
                    <Route exact path="/step3" render={props => <Step3 {...props} />}>
                    </Route>
                    <Route exact path="/step4" render={props => <Step4 {...props} />}>
                    </Route>
                    <Route exact path="/home" >
                        <Home />
                    </Route>
                    <Route exact path="/payment-method" render={props => <CheckoutSelect {...props} />}>
                    </Route>
                    <Route exact path="/checkout" render={props => <Checkout {...props} />}>
                    </Route>
                    <Route exact path="/checkout/:payment" render={props => <Checkout {...props} />}>
                    </Route>
                    <Route exact path="/editImage">
                        <EditPicture />
                    </Route>
                </Router >
            </>
        );

    }
}
export default App;