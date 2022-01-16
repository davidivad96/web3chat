export const randomNumberBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const generateRandomAvatar = (): string =>
  `https://avatars.dicebear.com/api/bottts/${randomNumberBetween(1, 10000)}.svg`;

export const shuffleArray = (array: any[]) => {
  const result = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
