import { selectProducts } from '../store/app/selector';
import { useSelector } from 'react-redux';

const CategoryHelper = () => {
    const show = useSelector(selectProducts);
  let arrCategory = [];
  arrCategory = new Set(show.map((category) => category.category));
  let arrCate = ["all",...arrCategory ]
  return arrCate;
};

export default CategoryHelper;
