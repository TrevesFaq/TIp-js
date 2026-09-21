"use strict";

const totalTasks = 5;
const completedTasks = 2;
const dailyLimit = 1001;

if (
  typeof totalTasks !== "number" ||
  typeof completedTasks !== "number" ||
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks)
) {
  console.log("Ошибка: количество задач должно быть целым числом");
} else if (totalTasks < 0 || totalTasks > 1000) {
  console.log("Ошибка: общее количество задач вне допустимого диапазона 0..1000");
} else if (completedTasks < 0 || completedTasks > totalTasks) {
  console.log("Ошибка: выполненных задач не может быть больше общего числа или меньше нуля");
} else if (
  typeof dailyLimit !== "number" ||
  !Number.isInteger(dailyLimit)
) {
  console.log("Ошибка: дневная норма должна быть целым числом");
} else if (dailyLimit < 1 || dailyLimit > 1000) {
  console.log("Ошибка: дневная норма вне допустимого диапазона 1..1000");
} else {
  let remainingTasks = totalTasks - completedTasks;

  if (remainingTasks === 0) {
    console.log("Все задачи уже выполнены");
    console.log("Потребуется дней: 0");
  } else {
    console.log("Осталось задач:", remainingTasks);

    let dayNumber = 0;

    while (remainingTasks > 0) {
      dayNumber += 1;
      const doneToday = Math.min(dailyLimit, remainingTasks);
      remainingTasks -= doneToday;
      console.log(`День ${dayNumber}: выполнено ${doneToday}, осталось ${remainingTasks}`);
    }

    console.log("Потребуется дней:", dayNumber);
  }
}