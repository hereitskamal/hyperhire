import React from 'react';

interface Skill {
  id: number;
  label: string;
}

interface SkillsPageProps {
  skills: Skill[];
}

export async function getServerSideProps() {
  const skillsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`);
  const skills: Skill[] = await skillsRes.json();

  return {
    props: {
      skills,
    },
  };
}

const SkillsPage: React.FC<SkillsPageProps> = ({ skills }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill.id} className="text-lg">
            {skill.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;
