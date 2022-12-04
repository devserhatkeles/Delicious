import CategoryCard from "../../components/category/categoryCard/CategoryCard";
import CategoryItem from "../../components/category/CategoryItem";

const Categories = () => {
  return (
    <CategoryCard>
      <CategoryItem title="cuisine" />
      <CategoryItem title="chicken" />
      <CategoryItem title="meat" />
      <CategoryItem title="pasta" />
      <CategoryItem title="pizza" />
      <CategoryItem title="dessert" />
      <CategoryItem title="vegetarian" />
    </CategoryCard>
  );
};

export default Categories;
