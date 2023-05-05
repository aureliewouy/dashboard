import React from 'react';
import styles from './profileSideBar.module.css';
import TeamSection from './components/teamSection';

interface ProfileProps {
  name: string;
  email: string;
  avatarUrl: string;
}

const ProfileSideBar: React.FC<ProfileProps> = ({ name, email, avatarUrl }) => {
  return (
    <div className={styles.profile}>
       <h3>
       My profil
        </h3> 
      <div className={styles.avatar}>
        <img src={avatarUrl} alt={name} />
      </div>
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    <div style={{width:"100%", marginRight: "5%"}}>
        <TeamSection></TeamSection>
        {/* <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"15px"}}>
        <h4>Team</h4>
        <a>View all</a>
        </div> */}
    </div>
    </div>
  );
};

export default ProfileSideBar;
