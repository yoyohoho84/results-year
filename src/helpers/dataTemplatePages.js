import {
  DoorIcon,
  SettingIcon,
  LikeIcon,
  StatsIcon,
  RocketIcon,
  LoveIcon,
  DoneIcon,
  SettingLightIcon,
  StarIcon,
  ChristamsTreeIcon,
  SantaIcon,
  CookiesIcon,
  LollipopIcon,
} from "../icons";
import { sharing } from "../sharing-method";
import { APP_IMG_SHARING_STORIES, APP_ID_DEFAULT } from "../constants";

export const dataTemplatePages = [
  {
    name: "/",
    icon: <SantaIcon />,
    header: "Привет!",
    title:
      "Наше приложение не является официальным и не может предоставлять точную статистику*",
    description:
      "* Приблизительные цифры высчитываются по формуле разработанной при анализе специальной фокус группы.",
    buttonName: "Ок",
    next: "setting",
  },
  {
    name: "setting",
    icon: <CookiesIcon />,
    header: "Разрешите доступ",
    title: "Это необходимо для того, чтобы я смог получить твои данные",
    description: "",
    buttonName: "Хорошо",
    next: "like",
  },
  {
    name: "like",
    icon: <LollipopIcon />,
    header: "Отлично",
    title: "Теперь я могу проверить твои данные",
    description: "",
    buttonName: "Начать анализ",
    next: "search",
  },
  {
    name: "search",
    icon: <SettingLightIcon />,
    header: "Провожу анализ",
    title: "Ищу дату регистрации...",
    description: "",
    buttonName: "",
    next: "result",
  },
  {
    name: "result",
    icon: <ChristamsTreeIcon />,
    header: "Анализ завершён",
    title: "Ну, что посмотрим немного статистике о тебе?",
    description: "",
    buttonName: "Узнать результат",
    next: "/result-panel",
  },
];
