const COUNT = 10;

const weekDays = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

const descriptions = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];
const colors = [`black`, `yellow`, `blue`, `green`, `pink`];

const getRandomNumber = (max, min = 0) => {
  const rand = min - 0.5 + Math.random() * (max - min);
  return Math.round(rand);
};

const getRandomBoolean = () => Math.random() > 0.5;

const getRandomDate = () => {
  const currentDate = new Date();
  const weekAgoDate = currentDate.getDate() - 7;
  const nextWeekDate = currentDate.getDate() + 7;
  const result = new Date().setDate(getRandomNumber(nextWeekDate, weekAgoDate));

  return new Date(result);
};

const getRandomRepeatingDays = () => {
  const repeatingDays = {};

  weekDays.forEach((item) => {
    repeatingDays[item] = getRandomBoolean();
  });

  return repeatingDays;
};

const getRandomDescription = () => {
  return descriptions[getRandomNumber(descriptions.length)];
};

const getRandomColor = () => {
  return colors[getRandomNumber(colors.length)];
};

const createData = (id) => {
  return {
    id,
    description: getRandomDescription(),
    dueDate: getRandomDate(),
    repeatingDays: getRandomRepeatingDays(),
    color: getRandomColor(),
    isFavourite: getRandomBoolean(),
    isArchive: getRandomBoolean(),
  };
};

const createMock = (count) => {
  let id = 0;
  return new Array(count).fill().map(() => createData(id++));
};

const mockTask = createMock(COUNT);

export {mockTask};
