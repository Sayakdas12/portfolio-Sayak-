"use client";

interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  company: string;
  side: "left" | "right";
  nodeColor: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    date: "Sep 2025 – Present",
    role: "Software Developer",
    company: "NexIntel Synergy Pvt. Ltd.",
    side: "left",
    nodeColor: "#a855f7",
    bullets: [
      "Designed and developed scalable full-stack applications using MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Built and optimized RESTful APIs improving response time by ~30% and ensuring efficient data handling.",
      "Implemented authentication and authorization using JWT and role-based access control.",
      "Led feature development and collaborated with cross-functional teams to deliver high-quality user-centric solutions.",
      "Improved application performance by optimizing database queries and implementing caching strategies."
    ],
  },
  {
    id: "2",
    date: "Apr 2025 – Sep 2025",
    role: "Full Stack Web Developer",
    company: "Digimantra",
    side: "right",
    nodeColor: "#6366f1",
    bullets: [
      "Developed scalable MERN applications improving API response time by ~30%.",
      "Designed RESTful APIs supporting high-volume user interactions.",
      "Integrated JWT-based authentication and role-based access control.",
      "Collaborated with cross-functional teams to deliver responsive UI using React + Tailwind."
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience section container" id="experience">
      <div className="experience__header">
        <h2 className="section__title experience__title">
          Professional <span className="experience__title-gradient">Experience</span>
        </h2>
        <p className="experience__subtitle">
          My journey building and teaching technology.
        </p>
      </div>

      <div className="timeline__container">
        {/* Glowing vertical center line */}
        <div className="timeline__line"></div>

        <div className="timeline__items">
          {experiences.map((item) => (
            <div
              key={item.id}
              className={`timeline__item timeline__item--${item.side}`}
            >
              {/* Timeline Center Node Dot */}
              <div
                className="timeline__node"
                style={
                  {
                    "--node-color": item.nodeColor,
                    borderColor: item.nodeColor,
                    boxShadow: `0 0 12px ${item.nodeColor}`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="timeline__node-inner"
                  style={{ backgroundColor: item.nodeColor }}
                ></div>
              </div>

              {/* Card Box */}
              <div className="timeline__card">
                {/* Minecraft Torch Easter Egg in the Top Right Corner */}
                <div className="card-torch-container">
                  <label className="minecraft-torch-label">
                    <input defaultChecked={true} type="checkbox" className="torch-checkbox" />
                    <div className="minecraft-torch">
                      <div className="torch-head">
                        <div className="torch-face torch-top">
                          <div></div><div></div><div></div><div></div>
                        </div>
                        <div className="torch-face torch-left">
                          <div></div><div></div><div></div><div></div>
                        </div>
                        <div className="torch-face torch-right">
                          <div></div><div></div><div></div><div></div>
                        </div>
                      </div>
                      <div className="torch-stick">
                        <div className="torch-side torch-side-left">
                          <div></div><div></div><div></div><div></div>
                          <div></div><div></div><div></div><div></div>
                          <div></div><div></div><div></div><div></div>
                          <div></div><div></div><div></div><div></div>
                        </div>
                        <div className="torch-side torch-side-right">
                          <div></div><div></div><div></div><div></div>
                          <div></div><div></div><div></div><div></div>
                          <div></div><div></div><div></div><div></div>
                          <div></div><div></div><div></div><div></div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <span className="timeline__date-badge">{item.date}</span>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__company">
                  <span className="timeline__building-icon">🏢</span>{" "}
                  {item.company}
                </p>
                <ul className="timeline__bullets">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
