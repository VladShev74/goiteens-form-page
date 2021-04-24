import React, { Component } from "react";
import styles from "./Tasks.module.css";
import LockedTask from './LockedTask'

export default class ParentsTasksBlock extends Component {
  render() {
    const { screenshot } = this.props;
    return (
      <div>
        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>
            День 1. Визначаємо сильні сторони дитини
          </h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText}>
                <span>🔹</span> Описати{" "}
                <b>сильні сторони своєї дитини в Hard Skills і Soft Skills</b>,
                за допомогою інструменту <b>WhiteBoardTeam</b>
              </p>
              <p className={styles.taskText}>
                <span>🔹</span> Результат повинен мати{" "}
                <b>як мінімум 5 пунктів</b>
              </p>
              <p className={styles.taskText}>
                <span>🔹</span> Посилання на готову дошку відправити у форму
              </p>
              <p className={styles.taskText}>
                <span>🔹</span> Інструкція для користування WhiteBoardTeam
                додається
              </p>
            </div>
            <div className={styles.taskButtonsWrapper}>
                
              <a href="https://youtu.be/7JU7bi9mcqY" target="_blank">
                <button className={styles.taskButton}>Інструкція</button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>
            День 2. ⬇️ Ваше завдання на сьогодні:
          </h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText}>
                🔹 разом з дитиною придумайте назву гри, яку створили на Scratch
              </p>
              <p className={styles.taskText}>
                🔹 додайте власного персонажа і магічну паличку
              </p>
              <p className={styles.taskText}>
                🔹 складіть інструкцію і опис гри і впишіть їх у відповідні поля
              </p>
              <p className={styles.taskText}>
                🔹 готову гру надішліть друзям і зберіть як мінімум 5 переглядів
              </p>
              <p className={styles.taskText}>
                🔹 готовий проект відправляють БАТЬКИ
              </p>
            </div>
            <div className={styles.taskButtonsWrapper}>
              <img src={screenshot} alt="screenshot" className={styles.taskImg}/>
              <a href="https://forms.gle/Y1MFaKGKstBeToLHA" target="_blank">
                <button className={styles.taskButton}>
                  Надіслати результат
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>
            День 3. ⬇️ Ваше завдання на сьогодні:
          </h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText}>
                🔹 разом з дитиною складіть список маленьких і великих досягнень
                за останній рік (мінімум 5 пунктів)
              </p>
              <p className={styles.taskText}>
                🔹 придумайте цікаве оформлення за допомогою інструменту
                WhiteBoard Team і встановіть на робочому столі комп'ютера
                дитини, щоб це нагадувало про успіх і надихало
              </p>
              <p className={styles.taskText}>
                🔹 Не забудьте залишити місце, щоб вписати ваші досягнення після
                марафону😉
              </p>
            </div>
            <div className={styles.taskButtonsWrapper}>
              <a href="https://www.whiteboard.team/" target="_blank">
                <button className={styles.taskButton}>Whiteboard</button>
              </a>
              <a href="https://forms.gle/2tkjy6dVH7EiALq37" target="_blank">
                <button className={styles.taskButton}>
                  Надіслати результат
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>
            День 4. Сьогодні ми підготували одночасно творче <br /> і приємне
            завдання для батьків! ⬇️
          </h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText}>
                🔸 організуйте сімейний вечір або обід зі своїми дітьми 😍
              </p>
              <p className={styles.taskText}>
                🔸 дізнайтесь детальніше про завдання, які виконують діти на
                своїй частині марафону: що зацікавило? що складно дається?
              </p>
              <p className={styles.taskText}>
                🔸 разом з дитиною пропишіть ❗️ три цілі для опанування
                IT-спеціальності, відповідаючи на питання: «Що я можу…» для
                досягнення цілі, і «Що мені треба…».
              </p>
              <p className={styles.taskText}>
                🔸 для оформлення використайте інструмент WhiteBoardTeam
              </p>
              <p className={styles.taskText}>
                🎥 Більше про IT-спеціальності дізнавайтесь на нашому сайті. 👇
              </p>
            </div>
            <div className={styles.taskButtonsWrapper}>
              <a href="https://goiteens.ua/programs.html" target="_blank">
                <button className={styles.taskButton}>Сайт GoITeens</button>
              </a>
              <a href="https://www.whiteboard.team/" target="_blank">
                <button className={styles.taskButton}>Whiteboard</button>
              </a>
              <a href="https://forms.gle/ir6nopPnWirofDw58" target="_blank">
                <button className={styles.taskButton}>
                  Надіслати результат
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>
            День 5. ⬇️ Ваше фінальне завдання:
          </h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText}>
                Оцінити і вашу спільну роботу, і те, як дитина впоралася з
                проектом.
              </p>
              <p className={styles.taskText}>
                Будьте чесними у своїх оцінках, але й не занадто строгими.
              </p>
              <p className={styles.taskText}>
                А також допоможіть нашій команді стати краще 😉
              </p>
            </div>
            <div className={styles.taskButtonsWrapper}>
              <a href="https://forms.gle/pBSv8FjY1oXd4DX88" target="_blank">
                <button className={styles.taskButton}>
                  Надіслати результат
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
