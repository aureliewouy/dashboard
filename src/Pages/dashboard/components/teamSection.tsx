import React from 'react';
import styles from './teamSection.module.css';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  online: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl , online}) => {
  return (
    <div className={styles.teamMember}>
      <div className={styles.avatar}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.info}>
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
      <div className={styles.online} style={{backgroundColor: online? "green" : "red"}}>

      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Team</h2>
          <a href="#">View all</a>
        </div>
        <div className={styles.teamMembers}>
          <TeamMember
          online={true}
            name="John Doe"
            role="CEO"
            imageUrl="https://i.imgur.com/1yQ2HmV.jpg"
          />
          <TeamMember
             online={true}
            name="Jane Smith"
            role="Marketing Director"
            imageUrl="https://i.imgur.com/LGvuwzT.jpg"
          />
          <TeamMember
             online={false}
            name="Bob Johnson"
            role="Software Engineer"
            imageUrl="https://i.imgur.com/ocHoYXJ.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
