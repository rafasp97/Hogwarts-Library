"use client";

import HomeView from "@/views/HomeView/HomeView";
import HouseViewComponent from "@/views/HouseView/HouseView";
import CharactersViewComponent from "@/views/CharactersView/CharactersView";
import FooterComponent from "@/componets/Footer/Footer";
import { LazyLaoding } from "@/utils/LazyLoading";

export default function HomePage() {
  return (
    <>
      <HomeView />

      <LazyLaoding>
        <HouseViewComponent/>
      </LazyLaoding>

      <LazyLaoding>
        <CharactersViewComponent />
      </LazyLaoding>

      <LazyLaoding>
        <FooterComponent />
      </LazyLaoding>

    </>
  );
}