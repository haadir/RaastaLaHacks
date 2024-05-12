"use client";

import React from "react";
import Image from "next/image";
import { LinearGradient } from "react-text-gradients";
import Navbar from "./components/navbar";
import { TextGenerateEffect } from "./components/text-generate-effect";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-40">
        <div className="flex justify-center items-start">
          <div className="flex flex-col justify-center items-start text-left px-6 mr-6">
            <h1 className="text-6xl font-bold mb-8">
              <div className="text-white">
                <TextGenerateEffect words={"Raasta"} />
              </div>
            </h1>
            <p className="description text-lg mb-6 max-w-lg">
              Using{" "}
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                {" "}
                AI agents{" "}
              </LinearGradient>{" "}
              to build
              <br /> an optimal navigation route based off{" "}
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                {" "}
                your preferences.{" "}
              </LinearGradient>
            </p>
            <p className="description2 text-lg mb-6 max-w-lg">
              Raasta can find restaurants and activities in a big city while
              avoiding danger with real-time data.
            </p>
          </div>
          <div className="pl-12">
            <img
              src="/raasta.jpg"
              alt="raasta"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="text-white text-center py-10 pt-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-4">
            <div>
              <span className="text-5xl font-bold">10</span>
              <p className="text-xl">AI Agents</p>
            </div>
            <div>
              <span className="text-5xl font-bold">100+</span>
              <p className="text-xl">Citiies</p>
            </div>
            <div>
              <span className="text-5xl font-bold">1000+</span>
              <p className="text-xl">Preferences</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
