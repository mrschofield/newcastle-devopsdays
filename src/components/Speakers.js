import React from "react";

import Speaker from './Speaker';
import nopic from "../assets/favicon.png";
import davidmcraney from "../assets/images/david-mcraney.jpg";
import aurynnshaw from "../assets/images/aurynn.jpg";
import mattray from "../assets/images/matt-ray.jpeg";
import geshanmanandhar from "../assets/images/geshan-manandhar.jpg";
import jamesboswell from "../assets/images/james-boswell.jpg";

const SpeakersList = [
  {
    name: "David McRaney",
    id: "david-mcraney",
    image: davidmcraney,
    twitter: "https://twitter.com/davidmcraney",
    url: "http://davidmcraney.com/",
    title: "Author, Journalist, Public Speaker",
    about: "David McRaney is an internationally bestselling author, journalist, and lecturer who created the You Are Not So Smart blog, books and podcast. David cut his teeth covering Hurricane Katrina on the Gulf Coast and in the Pine Belt region of the Deep South. Since then, he has been a beat reporter, an editor, a photographer, voiceover artist, television host, digital content manager, and everything in between. His writing work has been featured at The Atlantic, The New York Post, Salon, Brainpickings, Lifehacker, Gawker, Boing Boing, The Huffington Post, and Big Think among many other places. He is married to Amanda McRaney, and they live in Hattiesburg, Mississippi.",
    talk: "Keynote - Day 1",
    summary: "More details about David's talk will be announced soon!"
  },
  {
    name: "Aurynn Shaw",
    id: "aurynn-shaw",
    image: aurynnshaw,
    twitter: "https://twitter.com/aurynn",
    url: "https://blog.aurynn.com/",
    title: "Founder and DevOps Culturalist at Eiara",
    about: "Aurynn is the founder of Eiara, a DevOps consultancy based out of Wellington, New Zealand, focussing on helping clients develop technical DevOps capability, and the cultural knowledge to use it. With over a decade as a professional software developer, Aurynn’s expertise ranges from modern cloud deployments to massively parallel supercomputer environments. As the defining voice of the ideas of “contempt culture”, Aurynn is working to change the very nature of how we create new technologies, and the questions that we must answer as we do.",
    talk: "Keynote - Day 2",
    summary: "More details about Aurynn's talk will be announced soon!"
  },
  {
    name: "Matt Ray",
    id: "matt-ray",
    image: mattray,
    twitter: "https://twitter.com/mattray",
    url: "http://leastresistance.net/",
    title: "Manager and Solutions Architect at Chef",
    about: "Matt Ray is Chef’s Sydney-based Manager and Solutions Architect for APJ. He has been active in the open source community for over two decades and has worked in a wide variety of startups and enterprises. He podcasts at SoftwareDefinedTalk.com, blogs at LeastResistance.net and is @mattray on Twitter, IRC, GitHub and too many Slacks.",
    talk: "10 Years of DevOps - How Did We Get Here and Where Are We Going?",
    summary: "DevOps is nearly 10 years old as a term, yet it continues to evolve in response to the state of the software world. While DevOps has no formal definition, we will explore how it has changed over time. New concepts like SRE and serverless will continue this evolution of how we think about DevOps."
  },
  {
    name: "Shilpa Cheruvu, Jemimah Irvin & Hailey Martin",
    id: "shilpa-cheruvu-jemimah-irvin-hailey-martin",
    image: nopic,
    twitter: "https://twitter.com/jemimahirvin",
    url: "",
    title: "Senior Software Developer (Shilpa), UX Designer (Jemimah), DevOps Engineer (Hailey)",
    about: "",
    talk: "Agile Chatbots",
    summary: "Chatbots are a hot topic right now but very little published work has been done around the development cycles. Hear about how the team at nib stood up an agile cross functional team and developed a continuous delivery pipeline for their chatbot nibby delivering up to 20 deployments per day."
  },
  {
    name: "Geshan Manandhar",
    id: "geshan-manandhar",
    image: geshanmanandhar,
    twitter: "https://twitter.com/geshan",
    url: "http://geshan.com.np",
    title: "Senior Software Engineer at THE ICONIC",
    about: "Geshan is a seasoned software engineer, with more than a decade of software engineering experience. Currently, in Sydney, Australia serving THE ICONIC as senior software engineer. He has a keen interest in REST architecture and microservices. He is actively involved with the developer community in his hometown Kathmandu, Nepal. He occasionally blogs in his free time.",
    talk: "From A and B to ~150 Microservices, The Journey and Learnings",
    summary: "Are you frustrated working with large, legacy and potentially lethal code bases? We were frustrated too, but in 4-5 years of time, we replaced A (front-end) and B (back-office) system with ~150 microservices. This talk reveals that journey and the things we learned along the way."
  },
  {
    name: "Rhys Elsmore",
    id: "rhys-elsmore",
    image: nopic,
    twitter: "https://twitter.com/rhyselsmore",
    url: "",
    title: "Security Architect at Heroku",
    about: "Rhys Elsmore is a Security Architect at Heroku (or as he likes to put it, an Internet Mall Cop), telecommuting from Newcastle. He also hunts for Bugcrowd, ranking in the Top 100 researchers. When not working, you can find him volunteering with the Rural Fire Service, getting his butt whooped at MMA, telling everyone about Crossfit, and caring for two needy Australian Shepherds.",
    talk: "Hacking Major Companies for Fun and Profit",
    summary: "Ready for an adventure full of security killchains, 0day, data loss, and vulnerabilities? This talk focuses on the base concepts of information security and start-to-finish walkthroughs of critical security vulnerabilities I have found in major corporations - or tl;dr how I hack for fun and profit."
  },
  {
    name: "James Boswell",
    id: "james-boswell",
    image: jamesboswell,
    twitter: "https://twitter.com/xcapee",
    url: "https://cmdsolutions.com.au",
    title: "Enterprise Architect at CMD Solutions",
    about: "James Boswell has over 30 years experience in IT, covering hardware design, telecommunications research and development, software development and enterprise architecture. He is an inveterate sufferer of imposter syndrome, constantly surprised that people seem to think he has something worth saying. He is also a father of six and grandfather, and co-author of the book “Cyberparenting – Raising your kids in an online world”.",
    talk: "Failure Is Not An Option (It's a Core Feature!)",
    summary: "This talk examines the breadth and depth of DevOps through the lens of “failure”. Understanding failure is essential to gain the rewards DevOps offers. I cover reliability engineering, testing, culture, psychological safety, and more! Includes stories from industry leaders and personal experience."
  },
  {
    name: "Damian Brady",
    id: "damian-brady",
    image: nopic,
    twitter: "https://twitter.com/damovisa",
    url: "https://damovisa.me",
    title: "Cloud Developer Advocate at Microsoft",
    about: "Damian is a Cloud Developer Advocate specializing in DevOps. Formerly a dev at Octopus Deploy and a Microsoft MVP, he has a background in software development and consulting in a broad range of industries. In Australia, he co-organised the Brisbane .Net User Group, and launched the now annual DDD Brisbane conference. He regularly speaks at conferences, User Groups, and other events around the world, and is an occasional guest on various podcasts like .NET Rocks and Hanselminutes.",
    talk: "DevOps for Data Science",
    summary: "In this session, see how DevOps best practices can be applied to data science and machine learning. I’ll walk through the practices, the tools, and what you should think about when using predictive models in your software."
  }
];

{/* 

We're just spreading all properties of each speaker to the component, if you want to limit this you need to specifiy them like so:

<Speaker 
  name={speaker.name}
  id={speaker.id}
  image={speaker.image}
  twitter={speaker.twitter}
  url={speaker.url}
  title={speaker.title}
  about={speaker.about}
  talk={speaker.talk}
  summary={speaker.summary}
/> 
*/}

const Speakers = () => (
  <section id="speakers">
    <div className="row">
      <h2>DevOpsDays Newcastle 2018 - Speakers</h2>

      <p>We are thrilled to welcome the following amazing speakers to Devopsdays Newy!</p>

      {/* Loop over speakers */}
      {SpeakersList.map(speaker => <Speaker key={`speaker-${speaker.id}`} {...speaker}/>)}

    </div>
  </section>
);

export default Speakers;
