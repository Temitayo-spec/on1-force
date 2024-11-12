function generateTag(): number {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return randomNumber;
}

function generateAlphaNumericTag(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  const randomChar = () =>
    characters[Math.floor(Math.random() * characters.length)];

  const part1 = Array.from({ length: 3 }, randomChar).join('');
  const part2 = Array.from({ length: 2 }, randomChar).join('');

  return `${part1}-${part2}`;
}

export { generateTag, generateAlphaNumericTag };
