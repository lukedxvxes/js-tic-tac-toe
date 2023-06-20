export const generateAndAppendTile = ({
  row,
  column,
  eventHandler,
  wrapperEl,
}) => {
  const tile = document.createElement('button');
  tile.setAttribute('data-row', row);
  tile.setAttribute('data-column', column);
  tile.classList.add('tile');
  tile.addEventListener('click', (e) => eventHandler(e));
  wrapperEl.append(tile);
};
