import React, { Component } from "react";
import styles from "./Tasks.module.css";

export default class TeensTasksBlock extends Component {
  render() {
    return (
      <div>
        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>
            День 1: ⬇️ <b>Реєструємось на платформі Scratch</b>
          </h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText}>
                <span>🔸</span> Перейди з комп'ютера за наступним посиланням:{" "}
                <a href="https://scratch.mit.edu/" target="_blank">
                  https://scratch.mit.edu/
                </a>
              </p>
              <p className={styles.taskText}>
                <span>🔸</span> Подивись відео-інструкцію від Анни, нашого
                технічного викладача.
              </p>
            </div>
            <div className={styles.taskButtonsWrapper}>
              <a
                href="https://youtu.be/xsGkhoaEJjU"
                target="_blank"
                className={styles.taskButtonLink}
              >
                <button className={styles.taskButton}>Реєстрація</button>
              </a>
              <a href="https://youtu.be/Yt1aG4YulA0" target="_blank">
                <button className={styles.taskButton}>Демонстрація гри</button>
              </a>
            </div>

            <p className={styles.taskText} style={{ textAlign: "center" }}>
              <b>⬇️ Пишемо свій перший код</b>
            </p>

            <div className={styles.taskButtonsWrapper}>
              <a
                href="https://youtu.be/4bFnEcGelmQ"
                target="_blank"
                className={styles.taskButtonLink}
              >
                <button className={styles.taskButton}>
                  Розбробка гри <br /> (частина 1)
                </button>
              </a>
              <a href="https://youtu.be/HVGV_U-LSk8" target="_blank">
                <button className={styles.taskButton}>
                  Як надіслати завдання?
                </button>
              </a>
              <a href="https://forms.gle/NdfWBu2ZqqTqNdSF6" target="_blank">
                <button className={styles.taskButton}>
                  Надіслати результат
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>
            День 2: Сьогодні ми зробимо нашу гру особливою 😎💻
          </h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText}>
                <span>🔸</span> Навчимося додавати лічільник балів
              </p>
              <p className={styles.taskText}>
                <span>🔸</span> Встановимо фон до нашої гри
              </p>
              <p className={styles.taskText}>
                <span>🔸</span> Змінимо ключові спрайти (об'єкти) на свій смак
              </p>
              <p className={styles.taskText}>
                А також попрацюємо у команді разом з батьками - дізнавайся у
                них, що треба зробити 😉
              </p>
              <p className={styles.taskText}>
                І сьогодні ❗саме батьки надсилають ваше виконане завдання.
              </p>
              <p className={styles.taskText}>Гайда розбиратися!</p>
            </div>
            <div className={styles.taskButtonsWrapper}>
              <a href="https://youtu.be/x_FZhWTGlpk" target="_blank">
                <button className={styles.taskButton}>
                  Розбробка гри <br /> (частина 2)
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>
            День 3: ⬇️ Завантажуємо Minecraft Education
          </h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText}>
                <span>🔸</span> Перейди з комп'ютера за наступним посиланням:{" "}
                <a href="https://education.minecraft.net/get-started/download">
                  https://education.minecraft.net/get-started/download
                </a>
              </p>
              <p className={styles.taskText}>
                <span>🔸</span> Подивись відео-інструкцію
              </p>
            </div>
            <div className={styles.taskButtonsWrapper}>
              <a href="https://youtu.be/Kt5ivqMUmtQ" target="_blank">
                <button className={styles.taskButton}>Інструкція</button>
              </a>
            </div>

            <p className={styles.taskText} style={{ textAlign: "center" }}>
              <b>⬇️ Пишемо свій перший код</b>
            </p>

            <div className={styles.taskButtonsWrapper}>
              <a href="https://youtu.be/LMnCtCS0AAA" target="_blank">
                <button className={styles.taskButton}>Відео-урок</button>
              </a>
              <a href="https://youtu.be/zk7kbX7wbdY" target="_blank">
                <button className={styles.taskButton}>Як надсилати дз</button>
              </a>
              <a href="https://forms.gle/deQqoCNQjzzyFTUR6" target="_blank">
                <button className={styles.taskButton}>
                  Надіслати результат
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>
            День 4: Створюємо справжній тропічний ліс🌴
          </h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText} style={{ textAlign: "center" }}>
                <b>Вмикай відео-урок і вйоу до пригод🚀</b>
              </p>
            </div>
            <div className={styles.taskButtonsWrapper}>
              <a href="https://youtu.be/JrEI_Wmp_Mw" target="_blank">
                <button className={styles.taskButton}>Відео-урок</button>
              </a>
              <a href="https://forms.gle/QH6kLT17RixauTqu9" target="_blank">
                <button className={styles.taskButton}>
                  Надіслати результат
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.tasksWrapper}>
          <h3 className={styles.taskTitle}>День 5: ⬇️ Фінальне завдання</h3>
          <div className={styles.taskBox}>
            <div className={styles.taskTextWrapper}>
              <p className={styles.taskText} style={{ textAlign: "center" }}>
                <b>
                  ❗Увага: під час запуску коду необхідно стояти на місці і не
                  ворушитись.
                </b>
              </p>
            </div>
            <div className={styles.taskButtonsWrapper}>
              <a href="https://youtu.be/AW2if8-FmTg" target="_blank">
                <button className={styles.taskButton}>Відео-урок</button>
              </a>
              <a href="https://forms.gle/Ng5QKsGwa6AurnVu8" target="_blank">
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
