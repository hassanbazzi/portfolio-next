import Cards from "components/Cards";

const items = [
  {
    name: "Kitab Sawti",
    logo: null,
    position: "CTO",
    summary:
      "Responsible for strategy, development, architecture, and organizational needs. Building a kick-ass happy and fullfilled remote team."
  },
  {
    name: "Coaching Without Borders",
    logo: null,
    position: "Founder, Fullfillment Coach",
    summary:
      "Helping individuals live a fullfilling life centered around passion, happiness, clarity, and gratitude"
  },
  {
    name: "Mobile Bank - Danske Bank",
    logo: null,
    position: "Senior Architect",
    summary: "Helped set and execute on Danske Bank's mobile bank arcitecture."
  },
  {
    name: "Baldr App - Danske Bank",
    logo: null,
    position: "Senior Fullstack Developer",
    summary:
      "Developed Baldr's React Native app and multiple microservices in Golang, Dotnet, and Node, along with extensive dev ops work."
  },
  {
    name: "Hilton Hotels",
    logo: null,
    position: "Senior Web and Performance Architect",
    summary:
      "Architected Hilton's web presence to prioritize PWA development and world-wide accessibility."
  },
  {
    name: "BetterUp",
    logo: null,
    position: "Lead Front-end Engineer",
    summary: "Built features and led a front-end performance transformation"
  },
  {
    name: "Vidy",
    logo: null,
    position: "Director of Web",
    summary:
      "Led all web initiatives ranging including a performant PWA, SEO, chat bots, and internationalization."
  },
  {
    name: "Townsquared",
    logo: null,
    position: "Lead Software Engineer",
    summary:
      "worked on the development of various social networking features, performance boosts, and training junior engineers."
  },
  {
    name: "Jetson Systems",
    logo: null,
    position: "Lead Software Engineer",
    summary:
      "led all efforts to build various dashboards that presented property, financial, and personal data."
  },
  {
    name: "Preact",
    logo: null,
    position: "Core team",
    summary:
      "Mostly contributing to Preact CLI, a build tool that brings all best practices with zero config. Also contributed to core Preact."
  },
  {
    name: "And more...",
    logo: null,
    position: "various",
    summary: "social"
  }
];
export default () => (
  <div>
    <Cards items={items} />
  </div>
);
