export const button = (label, action) => {
  const buttonDom = document.createElement("button");
  buttonDom.innerHTML = label;
  buttonDom.addEventListener("click", action);

  return buttonDom;
};
