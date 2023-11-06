import { ADD_HERO_ROUTE, HERO_ROUTE, HEROES_ROUTE } from "./utils/consts";

import Heroes from "./pages/Heroes";
import HeroPage from "./pages/HeroPage";
import CreateHero from "./pages/CreateHero";

export const authRoutes = [];

export const publicRoutes = [
  {
    path: ADD_HERO_ROUTE,
    Component: CreateHero,
  },
  {
    path: HEROES_ROUTE,
    Component: Heroes,
  },
  {
    path: HERO_ROUTE + "/:id",
    Component: HeroPage,
  },
];
