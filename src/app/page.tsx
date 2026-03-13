"use client";

import HomeView from "@/views/HomeView/HomeView";
import HouseView from "@/views/HouseView/HouseView";
import CharactersView from "@/views/CharactersView/CharactersView";
import Footer from "@/componets/Footer/Footer";
import DeathlyRelicsView from "@/views/DeathlyRelicsView/DeathlyRelicsView";
import { LazyLaoding } from "@/utils/LazyLoading";

export default function HomePage() {
  return (
    <>
      <HomeView />

      <LazyLaoding>
        <HouseView/>
      </LazyLaoding>

      <LazyLaoding>
        <DeathlyRelicsView/>
      </LazyLaoding>

      <LazyLaoding>
        <CharactersView />
      </LazyLaoding>

      <LazyLaoding>
        <Footer />
      </LazyLaoding>

    </>
  );
}