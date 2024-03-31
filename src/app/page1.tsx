import Image from "next/image";
import Navbar from "./components/navigation";
import Typewriter from 'typewriter-effect';
import { TracingBeam } from './components/trace-beam';
import { TextGenerateEffect } from './components/text-generate'
import { WavyBackground } from "./components/wavy-background";

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="text-center pt-12"> {/* Add padding-top to push the content down */}
          {/* ... */}
      </div>

      <main className="flex-grow container mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <TextGenerateEffect words="Hi there, I'm Haadi" className="px-6 text-8xl mb-6" />

        <p className = "text-center">
          I am a third year student at USC studying Computer Science. 
          I have three internships completed <br/> and I am currently seeking
          a fourth for the 2024 summer.
        </p>

        <div className="text-center pt-16"> {/* Add padding-top to push the content down */}
          {/* ... */}
        </div>

        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 mr-10 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                </h2>
    
                <p className="text-xl mb-4">
                  <a href={item.imageLink} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </p>
    
                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <a href={item.imageLink} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={item.image}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                      />
                    </a>
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
        <div className="text-center pb-16"> {/* Add padding-bottom to add space at the bottom */}
  
        </div>
      </main>
    </div>
  );
};

const dummyContent = [
  {
    title: "PayPal Software Engineer Intern",
    description: (
      <>
        <p>
          During my tenure as a Software Integration Engineering Intern at PayPal's San Jose, 
          California office from May to August in 2022 and again during the same period in 2023,
           I spearheaded the development of a system designed to facilitate seamless payment 
           integrations. This initiative targeted high-profile merchants and is currently serving 
           a customer base of over 100 million users. The system leverages the Braintree SDK tailored 
           for Node.js integrations.
        </p>
        <p>
          My role involved providing critical support to more than 20 merchants, aiding them in efficiently 
          troubleshooting checkout and customization issues. This effort was pivotal in maintaining a smooth 
          and user-friendly payment experience. Moreover, I contributed to enhancing the SDK's functionality, 
          which yielded a 10% improvement in documentation clarity, thereby bolstering the robustness of the 
          integration process.
        </p>
        <p>
          In addition to these contributions, I developed a comprehensive checkout system that incorporates both
          Braintree and PayPal solutions. This system empowers merchants by providing them the ability to precisely 
          adjust their website's checkout process, utilizing the full spectrum of customization options available.
        </p>
      </>
    ),
    badge: "Node.js, API, Javascript",
    image: "/paypal.jpg",
  },
  {
    title: "Innowi Hardware and Software Intern",
    description: (
      <>
        <p>
          During my tenure as a Hardware and Software Intern at Innowi from 
          August to December 2021 in Santa Clara, California, I had the opportunity 
          to deploy 15 innovative hardware and software solutions. These encompassed 
          payment modules, digital menus, and comprehensive online and mobile setups, 
          predominantly for local eateries. My role was crucial in enhancing the 
          functionality of interactive kiosks through adept Java programming and the 
          utilization of Creo Parametric, thus significantly improving the interactive 
          user experiences.
        </p>
        <p>
          My engagement extended beyond technical advancements to hands-on customer interactions, 
          where I provided in-person technical support to hundreds of local clients. Collaboration 
          was key, and I worked in sync with development teams both overseas and in San Jose. We operated 
          within Linux environments which streamlined bug reproduction and facilitated rapid resolution, 
          thereby driving the efficiency and effectiveness of our technological solutions.
        </p>
      </>
    ),
    badge: "Java, Hardware, Linux",
    image:
      "/innowi.jpg",
  },
  {
    title: "TrojanPlanner",
    description: (
      <>
        <p>
        In December 2023, I developed a sophisticated web application named Trojan Planner.
        It was built using Next.js, BeautifulSoup to extract HTML data, 
        and JavaScript for dynamic DOM manipulation. The core feature was a robust scheduling 
        algorithm that generated custom student schedules, fine-tuned to individual preferences. 
        </p>
      </>
    ),
    badge: "Next.js, Python, React, API",
    image: "/usc.jpg",
    imageLink: "https://trojanplanner.com/"
  },
  {
    title: "TroyLabs, Startup Accelerator Club",
    description: (
      <>
        <p>
        Starting January 2024, I was chosen from over 400 applicants to be part 
        of an exclusive group of 24 students at TroyLabs, a startup accelerator 
        partnered with Google, AWS, Robinhood, and Tinder. I made significant 
        contributions to Hatchet, a project aimed at supporting firefighters 
        through both an application and hardware solutions. My role included 
        assisting in the transition from Unity to Android platforms.
        </p>
      </>
    ),
    badge: "Software, Entrepreneurship",
    image: "/troylabs.jpg",
  },
  {
    title: "AVL Tree Implementation",
    description: (
      <>
        <p>
        In November 2022, I took on the challenge of optimizing data structures 
        by designing and implementing an AVL tree in C++. My implementation focused 
        on maintaining an optimally balanced tree, which significantly expedited 
        operations like insertion and removal. Through the integration of self-balancing 
        algorithms and advanced rotation techniques, the AVL tree ensured logarithmic 
        operation times and sustained balance for efficient data management.
        </p>
      </>
    ),
    badge: "C++",
    image:
      "",
  },
];

export default IndexPage;
