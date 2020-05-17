import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import ImageRegco from "./ImageRegco";
import ImageDetect from "./ImageDetect";

const App = () => {
    return (
        <HashRouter basename="/">
            <div className="container">
                <h1 className="mx-auto my-4">Face Regkonition</h1>
                <Switch>
                    <Route path="/" exact component={ImageRegco} />
                    <Route path="/video" exact component={ImageDetect} />
                </Switch>
            </div>
        </HashRouter>
    );
};

export default App;
