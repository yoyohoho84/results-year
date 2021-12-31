import React, { useState, useEffect } from "react";
import { Button } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import cn from "classnames";
import "./ResultPanel.scss";
import { story } from "../../sharing-method";
import { nativeAds } from "../../ads";
import {
  APP_IMG_SHARING_STORIES,
  APP_ILLUMINATE,
  APP_STATISTICS,
  APP_REMEMBER_SUMMER,
  APP_STATS_APP,
  APP_SQUID_GAME,
  APP_MY_LOVE_1,
} from "../../constants";

const ResultPanel = ({
  id,
  go,
  IMGresult,
  getPlatform,
  openAlert,
  snackbar,
  fetchedUser,
  getGroupId,
  appID,
  imgIndex,
}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     nativeAds(getPlatform);
  //   }, 3000);
  // }, []);

  const openNewApp = (appId) => {
    bridge
      .send("VKWebAppOpenApp", { app_id: appId, location: "new-app" })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div
      className={cn({
        "result-panel": true,
        web: getPlatform === "web",
      })}
    >
      <Button
        className="buttons"
        onClick={() => story(APP_IMG_SHARING_STORIES[imgIndex])}
      >
        Посмотреть результат
      </Button>
      <Button className="buttons" onClick={() => openNewApp(APP_MY_LOVE_1)}>
        Узнай свою вторую половинку
      </Button>
      <Button
        className="buttons small-text"
        onClick={() => openNewApp(APP_SQUID_GAME)}
      >
        Пройди тест на знание сериала "Игра в кальмара"
      </Button>
      <Button
        className="buttons small-text"
        onClick={() => openNewApp(APP_ILLUMINATE)}
      >
        Узнай дату смерти, свадьбы, секса
      </Button>
    </div>
  );
};

export { ResultPanel };
