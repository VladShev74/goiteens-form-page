import React from 'react';
import styles from './Tasks.module.css';
import lockSvg from "./img/padlock.svg";

export default function LockedTask({lockSvg}) {
    return (
        <div>
            <div className={styles.lockedTaskBox}>
              <img src={lockSvg} alt="Lock" className={styles.lockedTaskImg} />
            </div>
        </div>
    )
}