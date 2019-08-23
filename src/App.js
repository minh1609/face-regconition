import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import ImageDetect from "./ImageDetect";
import VideoDetect from "./VideoDetect";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <h1 className="mx-auto">Celebrities Regkonition</h1>
                <Switch>
                    <Route path="/" exact component={ImageDetect} />
                    <Route path="/video" exact component={VideoDetect} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
