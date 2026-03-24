import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TeamCard from '../ui/TeamCard';
import Section from './Section';

const description = "Meet the skilled and experienced team behind our successful digital marketing strategies";

const team = [
  { pic: "/images/team/t1.png", name: "John Smith", role: "CEO and Founder", description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy", link: "https://linkedin.com" },
  { pic: "/images/team/t2.png", name: "Jane Doe", role: "Director of Operations", description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills", link: "https://linkedin.com" },
  { pic: "/images/team/t3.png", name: "Michael Brown", role: "Senior SEO Specialist", description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization", link: "https://linkedin.com" },
  { pic: "/images/team/t4.png", name: "Emily Johnson", role: "PPC Manager", description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis", link: "https://linkedin.com" },
  { pic: "/images/team/t5.png", name: "Brian Williams", role: "Social Media Specialist", description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement", link: "https://linkedin.com" },
  { pic: "/images/team/t6.png", name: "Sarah Kim", role: "Content Creator", description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries", link: "https://linkedin.com" }
];

export default function Team() {
  return (
    <Section id="about">
      <div className="mt-[140px]">
        <SectionTitle sectionTitle="Team" description={description} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-10">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              pic={member.pic}
              name={member.name}
              role={member.role}
              description={member.description}
              link={member.link}
            />
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <button className="btn-primary">See all team</button>
        </div>
      </div>
    </Section>
  );
}
