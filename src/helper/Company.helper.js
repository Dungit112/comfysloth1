import { selectProducts } from "../store/app/selector";
import { useSelector } from "react-redux";

const CompanyHelper = () => {
  const show = useSelector(selectProducts);
  let arrCompany = [];
  arrCompany = new Set(show.map((company) => company.company));
  let arrCompa = ["all", ...arrCompany];
  return arrCompa;
};

export default CompanyHelper;
