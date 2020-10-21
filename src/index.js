import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./store/index";
import "./static/iconfont/iconfont.css";
import "./static/js/rem";
import "./static/css/reset.css";
import "./static/css/home.scss";
import "./static/css/recommend.scss";
import "./static/css/rank.scss";
import "./static/css/songSheet.scss";
import "./static/css/dj.scss";
import "./static/css/search.scss";
import "./static/css/my.scss";
import "./static/css/video.scss";
import "./static/css/player.scss";
import "./static/css/skin.scss";
import "./static/css/common.scss";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
