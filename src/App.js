import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import ImageDetect from "./ImageDetect";
import VideoDetect from "./VideoDetect";

const App = () => {
    return (
        <HashRouter basename="/">
            <div className="container">
                <h1 className="mx-auto my-4">Celebrities Regkonition</h1>
                <Switch>
                    <Route path="/" exact component={ImageDetect} />
                    <Route path="/video" exact component={VideoDetect} />
                </Switch>
            </div>
        </HashRouter>
    );
};

export default App;
