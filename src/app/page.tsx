import React from 'react';
import Image from "next/image";
// import { TextGenerateEffect } from './components/text-generate.client'
import { LinearGradient } from 'react-text-gradients';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex justify-center items-start">
          <div className="flex flex-col justify-center items-start text-left px-6 mr-6">
            {/* <TextGenerateEffect words="Haadi Razzak" className="name text-5xl mb-4" /> */}
            <h1 className="name text-5xl mb-4">Haadi Razzak</h1>
            <p className="description text-lg mb-6 max-w-lg">
              Advanced <LinearGradient gradient={['to left', '#ee5a24 ,#ee2027']}>
               software engineer
              </LinearGradient>, 
              skilled <LinearGradient gradient={['to left', '#ee2027 ,#ee5a24']}>
               full-stack
              </LinearGradient> developer, 
              <br/> & aspiring <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
               entrepreneur
              </LinearGradient>.
            </p>
            <p className="description2 text-lg mb-6 max-w-lg">
                Taking problems and turning them into opportunities.
            </p>
            <div className="flex justify-center items-center space-x-4 mt-4">
            <Link href="https://github.com/haadir" passHref>
              <Image
                src="/github.png"
                alt="GitHub"
                width={30}
                height={30}
                style={{ cursor: 'pointer' }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/haadirazzak/" passHref>
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={30}
                height={30}
                style={{ cursor: 'pointer' }}
              />
            </Link>
            <a href="mailto:hrazzak@usc.edu" target="_blank" rel="noopener noreferrer">
            <Image
              src="/mail.png"
              alt="Email"
              width={30}
              height={30}
              style={{ cursor: 'pointer' }}
            />
            </a>
            </div>
          </div>
          <div className="pl-12">
            <Image
              src="/profilepic.jpg"
              alt="Haadi Razzak"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex items-start justify-center mt-8">
          {/* <div className="flex-shrink-0 mr-4">
              <Image
                src="/TrojanPlannerLogo.jpg"
                alt="TrojanPlanner Logo"
                width={200}
                height={200}
                className="rounded-lg"
              />
          </div> */}

          <div className="code-editor mt-20 mx-auto">
            <div className="header">
              <span className="title">Education</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M6 6L18 18" />
                <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M18 6L6 18" />
              </svg>
            </div>
            <div className="editor-content">
              <code className="code">
                <p><span className="color-0">.USC </span><span>{'{'}</span></p>
                <p className="property">
                  <span className="color-2">school</span><span>:</span>
                  <span className="color-1">the university of southern california</span>;
                </p>
                <p className="property">
                  <span className="color-3">2021-2025</span>;
                </p>
                <p className="property">
                  <span className="color-2">major:</span><span></span>
                  <span>Computer Science</span>;
                </p>
                <span>{'}'}</span>
              </code>
            </div>
          </div>

          <div className="code-editor mt-20 mx-auto">
            <div className="header">
              <span className="title">Work Experience</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M6 6L18 18" />
                <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M18 6L6 18" />
              </svg>
            </div>
            <div className="editor-content">
              <code className="code">
                <p><span className="color-0">.paypal </span><span>{'{'}</span></p>
                <p className="property">
                  <span className="color-2">role</span><span>:</span>
                  <span className="color-1">swe intern</span>;
                  <span className="color-3"><br />2022 & 2023</span>;
                </p>
                <p className="property">
                  <span className="color-2">languages</span><span>:</span>
                  <span>python,node.js</span>;
                </p>
                <span>{'}'}</span>
                <p><span className="color-0">.innowi </span><span>{'{'}</span></p>
                <p className="property">
                  <span className="color-2">role</span><span>:</span>
                  <span className="color-1">swe and hardware intern</span>
                  <span className="color-3"><br />2021</span>; 
                </p>
                <p className="property">
                  <span className="color-2">languages</span><span>:</span>
                  <span>java</span>;
                </p>
                <span>{'}'}</span>
              </code>
            </div>
          </div>

          <div className="code-editor mt-20 mx-auto">
            <div className="header">
              <span className="title">TrojanPlanner</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M6 6L18 18" />
                <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M18 6L6 18" />
              </svg>
            </div>
            <div className="editor-content">
              <code className="code">
                <p><span className="color-0">.personal-project </span><span>{'{'}</span></p>
                <p className="property">
                  <span className="color-2">currently</span><span>:</span>
                  <span className="color-1">developing</span>;
                </p>
                <p className="property">
                  <span className="color-2">languages</span><span>:</span>
                  <span>python,next.js,
                    react</span>;
                </p>
                <p className="property">            
                   <span className="color-3">coming soon</span>;
                </p>
                <span>{'}'}</span>
              </code>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default IndexPage;
