import React from 'react';
import Image from "next/image";
// import { TextGenerateEffect } from './components/text-generate.client'
import { LinearGradient } from 'react-text-gradients';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-48">
        <div className="flex justify-center items-start">
          <div className="flex flex-col justify-center items-start text-left px-6 mr-6">
            {/* <TextGenerateEffect words="Raasta" className="name text-5xl mb-4" /> */}
            <h1 className="name big-text mb-4">Raasta</h1>
            <p className="description text-lg mb-6 max-w-lg">
              Using <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}> AI agents </LinearGradient> to build
              <br/> an optimal navigation route based off <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}> your preferences. </LinearGradient>
            </p>
            <p className="description2 text-lg mb-6 max-w-lg">
                Raasta can find restaurants and activities in a big city while avoiding danger with real-time data.
            </p>

          </div>
          <div className="pl-12">
            <Image
              src="/raasta.jpg"
              alt="raasta"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex items-start justify-center mt-8">

        </div>
      </main>
    </div>
  );
}

export default IndexPage;
