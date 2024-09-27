// pages/skills.tsx
import React from 'react';

interface Skill {
  id: number;
  label: string;
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`);
    if (!res.ok) throw new Error('Failed to fetch skills');
    const skills: Skill[] = await res.json();
    return { props: { skills } };
  } catch (error) {
    console.error(error);
    return { props: { skills: [] } };
  }
}

const SkillsPage: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      {skills.length > 0 ? (
        <ul className="space-y-2">
          {skills.map((skill) => (
            <li key={skill.id} className="text-lg">
              {skill.label}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-500">No skills available.</p>
      )}
    </div>
  );
};

export default SkillsPage;
