export default function test(functionResult, expectResult) {
  if (functionResult === undefined || expectResult === undefined) {
    console.log("Функция ничего не вернула или не было передано ожидаемое значение!");
    return
  }

  console.log(`${
    functionResult.toString() === expectResult.toString()
      ? "Успешно!"
      : "Ошибка!"
  } 
    Ожидаемый результат: ${JSON.stringify(expectResult)}
    Полученный результат: ${JSON.stringify(functionResult)}
    \n`);
}
