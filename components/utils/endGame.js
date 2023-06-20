export const endGame = () => {
  const buttons = document.querySelectorAll('button.tile');
  buttons.forEach((button) => button.setAttribute('disabled', true));
};
