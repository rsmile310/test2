// i18n
import "./locales/i18n";
// scroll bar
import "simplebar/src/simplebar.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// contexts
import { SettingsProvider } from "./contexts/SettingsContext";
import { CollapseDrawerProvider } from "./contexts/CollapseDrawerContext";
//
import App from "./App";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

// ----------------------------------------------------------------------

ReactDOM.render(
  <ApolloProvider client={client}>
    <HelmetProvider>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CollapseDrawerProvider>
      </SettingsProvider>
    </HelmetProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
