const COUNT = 2;

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

const getDescription = () => {
  return descriptions[getRandomNumber(descriptions.length)];
};

const getColor = () => {
  return colors[getRandomNumber(colors.length)];
};

const createData = () => {
  return {
    description: getDescription(),
    dueDate: getRandomDate(),
    repeatingDays: getRandomRepeatingDays(),
    color: getColor(),
    isFavourite: getRandomBoolean(),
    isArchive: getRandomBoolean(),
  };
};

const createMock = (count) => {
  return new Array(count).fill().map(createData);
};

const mock = createMock(COUNT);
