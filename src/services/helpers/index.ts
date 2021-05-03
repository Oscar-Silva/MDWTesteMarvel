export const wait = (miliseconds: number): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, miliseconds);
  });
};
