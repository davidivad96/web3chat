export const randomNumberBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const generateRandomAvatar = (): string =>
  `https://avatars.dicebear.com/api/bottts/${randomNumberBetween(1, 10000)}.svg`;
