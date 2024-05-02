import { v4 as uuid } from "uuid";

const formatter = (data) => {
  console.log(data.cards[0].image);
  return { id: uuid(), image: data.cards[0].image };
};

export { formatter };
