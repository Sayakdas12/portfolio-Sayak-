"use client";

interface EducationItem {
  id: string;
  year: string;
  degree: string;
  institution: string;
  university: string;
  location: string;
  gradeBadge: string;
  glowColor: string;
  icon: string;
  courses: string[];
}

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  badge: string;
  glowColor: string;
}

const educationDetails: EducationItem[] = [
  {
    id: "mca",
    year: "2023 – 2025",
    degree: "Master of Computer Application (MCA)",
    institution: "Lovely Professional University",
    university: "LPU Punjab",
    location: "Jalandhar, Punjab",
    gradeBadge: "CGPA: 8.01",
    glowColor: "rgba(244, 114, 182, 0.4)", // Pink glow
    icon: "ri-graduation-cap-line",
    courses: [
      "Full-Stack Web Architectures & MERN Stack",
      "Advanced Database Systems & Query Optimization",
      "Object-Oriented Design & System Paradigms",
      "Software Engineering & Microservice Patterns"
    ],
  },
  {
    id: "bca",
    year: "2019 – 2022",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Eminent College of Management and Technology",
    university: "Kolkata, WB",
    location: "Kolkata, West Bengal",
    gradeBadge: "CGPA: 8.51",
    glowColor: "rgba(168, 85, 247, 0.4)", // Purple glow
    icon: "ri-book-open-line",
    courses: [
      "Data Structures & Core Algorithms",
      "C++ & Java Application Programming",
      "Relational Databases & SQL Optimization",
      "Web Systems & Client-Side Architectures"
    ],
  },
];

const certificates: CertificateItem[] = [
  {
    id: "cert-fullstack",
    title: "Full Stack Development",
    issuer: "Apna College",
    date: "13 Aug '25",
    icon: "ri-terminal-box-line",
    badge: "Verified Certification",
    glowColor: "rgba(244, 114, 182, 0.4)",
  },
  {
    id: "cert-adv-react",
    title: "Advanced React",
    issuer: "Coursera / Meta",
    date: "07 Aug '24",
    icon: "ri-reactjs-line",
    badge: "Meta Certified",
    glowColor: "rgba(97, 218, 251, 0.4)",
  },
  {
    id: "cert-frontend",
    title: "Front-End Developer",
    issuer: "Coursera / Meta",
    date: "07 Jul '24",
    icon: "ri-layout-3-line",
    badge: "Meta Certified",
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
];

export default function Education() {
  return (
    <section className="education-section section container" id="curriculumvitae">
      {/* Section Header */}
      <div className="education-header">
        <h2 className="section__title education-title">
          Academic <span className="education-title-gradient">Pathways</span>
        </h2>
        <p className="education-subtitle">
          Formal computer science foundation and accredited credentials in modern software engineering.
        </p>
      </div>

      {/* Modern Card Grid */}
      <div className="education-grid">
        {educationDetails.map((edu) => (
          <div
            key={edu.id}
            className="education-card"
            style={
              {
                "--card-glow": edu.glowColor,
              } as React.CSSProperties
            }
          >
            {/* Top Bar with Icon & Status */}
            <div className="edu-card-top">
              <div className="edu-icon-wrap">
                <i className={edu.icon} aria-hidden="true"></i>
              </div>
              <span className="edu-status-badge">{edu.gradeBadge}</span>
            </div>

            {/* Date and Title */}
            <span className="edu-year">{edu.year}</span>
            <h3 className="edu-degree">{edu.degree}</h3>

            {/* Institutions */}
            <div className="edu-details">
              <p className="edu-inst">
                <i className="ri-building-line" aria-hidden="true"></i> {edu.institution}
              </p>
              <p className="edu-univ">
                <i className="ri-government-line" aria-hidden="true"></i> {edu.university}
              </p>
              <p className="edu-loc">
                <i className="ri-map-pin-line" aria-hidden="true"></i> {edu.location}
              </p>
            </div>

            {/* Key Focus Areas */}
            <div className="edu-courses">
              <h4 className="edu-courses-title">Core Disciplines</h4>
              <ul className="edu-courses-list">
                {edu.courses.map((course, idx) => (
                  <li key={idx} className="edu-course-item">
                    <span className="course-dot"></span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Showcase */}
      <div style={{ marginTop: "3.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <i className="ri-award-line" style={{ color: "#f472b6" }}></i>
            Certifications &amp; Accreditations
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: "0.25rem" }}>
            Professional credentials verified by recognized industry leaders
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              style={{
                background: "rgba(18, 24, 38, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                padding: "1.5rem 1.75rem",
                backdropFilter: "blur(14px)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                position: "relative",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = cert.glowColor;
                e.currentTarget.style.boxShadow = `0 12px 30px ${cert.glowColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.35)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    color: "#f472b6",
                  }}
                >
                  <i className={cert.icon}></i>
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "999px",
                    background: "rgba(244, 114, 182, 0.12)",
                    color: "#f472b6",
                    border: "1px solid rgba(244, 114, 182, 0.3)",
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              <div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#f1f5f9", margin: "0.25rem 0" }}>
                  {cert.title}
                </h4>
                <p style={{ color: "#38bdf8", fontSize: "0.9rem", fontWeight: 500, margin: 0 }}>
                  <i className="ri-verified-badge-line" style={{ marginRight: "0.35rem" }}></i>
                  {cert.issuer}
                </p>
              </div>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.82rem",
                  color: "#94a3b8",
                }}
              >
                <span>
                  <i className="ri-calendar-line" style={{ marginRight: "0.35rem" }}></i>
                  Issued: {cert.date}
                </span>
                <span style={{ color: "#a855f7" }}>
                  <i className="ri-check-double-line"></i> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
