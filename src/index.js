import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

import { TasksProvider } from "./customHooks/useTasks";
import { CoinProvider } from "./customHooks/useCoins";

import { RouterProvider, createHashRouter } from "@vkontakte/vk-mini-apps-router";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";

// Init VK Mini App
bridge.send("VKWebAppInit");

const router = createHashRouter([
  {
    path: '/',
    panel: 'homePanel',
    view: 'default_view'
  },
  {
    path: 'calendar',
    panel: 'calendarPanel',
    view: 'default_view'
  },
  {
    path: 'statistics',
    panel: 'statisticsPanel',
    view: 'default_view'
  },
  {
    path: 'challenges',
    panel: 'challengesPanel',
    view: 'default_view'
  },
]);

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot mode="embedded">
        <RouterProvider router={router}>
          <StrictMode>
            <TasksProvider>
              <CoinProvider>
                <App />
              </CoinProvider>
            </TasksProvider>
          </StrictMode>
        </RouterProvider>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
  , document.getElementById("root"));