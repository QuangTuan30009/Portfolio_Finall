import "./index.scss";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiFirebase,
  SiMui,
  SiVercel,
} from "react-icons/si";

/* Card dùng children (viết trong cùng file) */
function SkillCard({ children, title }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{children}</div>
      <p className="skill-title">{title}</p>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="tech-stack" id="tech">
      <h2 className="tech-title">Tech Stack</h2>

      <div className="tech-grid">
        <SkillCard title="HTML">
          <FaHtml5 color="#E34F26" />
        </SkillCard>

        <SkillCard title="CSS">
          <FaCss3Alt color="#1572B6" />
        </SkillCard>

        <SkillCard title="JavaScript">
          <FaJs color="#F7DF1E" />
        </SkillCard>

        {/* <SkillCard title="Bootsraps CSS">
          <SiTailwindcss color="#38BDF8" />
        </SkillCard> */}

        <SkillCard title="ReactJS">
          <FaReact color="#61DAFB" />
        </SkillCard>

        <SkillCard title="Vite">
          <SiVite color="#A855F7" />
        </SkillCard>

        <SkillCard title="NodeJS">
          <FaNodeJs color="#22C55E" />
        </SkillCard>

        <SkillCard title="Bootstrap">
          <FaBootstrap color="#7952B3" />
        </SkillCard>

        {/* <SkillCard title="Firebase">
          <SiFirebase color="#FACC15" />
        </SkillCard>

        <SkillCard title="Material UI">
          <SiMui color="#38BDF8" />
        </SkillCard> */}

        <SkillCard title="Vercel">
          <SiVercel color="#ffffff" />
        </SkillCard>
      </div>
    </section>
  );
}
