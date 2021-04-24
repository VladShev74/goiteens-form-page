import React from "react";
import styles from "./Header.module.css";
import logo from './img/logo.png';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
      <img
        src={logo}
        alt="logo GoITeens"
        className="logo"
        className={styles.logo}
      />
      </div>
      
      <h1 className={styles.title}>Як проходить марафон <br/> IT START?</h1>

      <div className={styles.textWrapper}>
        <p>
          <span>📌</span> Кожен день <b>о 12:00</b> ви
          отримуєте завдання чатботі.
        </p>
        <p>
          <span>📌</span> На проходежння одного
          завдання виділяється <b>24 години</b>
        </p>
        <p>
          <span>📌</span> Результат виконання
          надсилається у форму <br /> <b>(кнопка "Надіслати результат")</b>
        </p>
        <p>
          <span>📌</span> За кожним учасником
          закріплений <b>індивідуальний номер ID</b>, який ви будете використовувати
          для відправки завдань
        </p>
        <p>
          <span>📌</span> За завдання відправлене до
          делайну нараховується <b>10 балів</b>. Якщо завдання відправлене пізніше = <b>8 балів</b>
        </p>
        <p>
          <span>📌</span> Марафон <b>розрахований на
          новачків</b>. На виконання завдань знадобиться до 1 години часу. Ви точно
          встигнете 💪
        </p>
        <p>
          <span>📌</span> Ми завжди на зв'язку у чаті
          марафону. <br/> <b>Контакти менеджера: @nikvtelegrame</b> 
        </p>
      </div>
    </div>
  );
}