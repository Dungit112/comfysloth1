import { selectProducts } from "../store/app/selector";
import { useSelector } from "react-redux";

const ColorHelper = () => {
  const show = useSelector(selectProducts);
  let arrColor = [];
  arrColor = show.map((color) => color.colors);
  let arr = new Set(arrColor.map((el) => el[0]));
  let arrCol = ["all", ...arr];
  return arrCol;
};

export default ColorHelper;
