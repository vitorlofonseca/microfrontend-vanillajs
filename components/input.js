export const input = (placeholder, value) => {
  const inputDom = document.createElement("input");
  inputDom.placeholder = placeholder;
  inputDom.value = value || "";

  return inputDom;
};
