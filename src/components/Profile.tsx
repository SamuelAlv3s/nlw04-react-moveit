import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile(){

    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="http://github.com/SamuelAlv3s.png" alt="Samuel Alves"/>
            <div>
                <strong>Samuel Alves</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}