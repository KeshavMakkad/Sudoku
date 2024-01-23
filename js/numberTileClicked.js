export let active = 1;

const numberClicked = (selected) => {
  const activeNumber = document.getElementById(active);
  const selectedNumber = document.getElementById(selected);
  activeNumber.classList.remove("active");
  selectedNumber.classList.add("active");
  active = selected;
};

export default numberClicked;