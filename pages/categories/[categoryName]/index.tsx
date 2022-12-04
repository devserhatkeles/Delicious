import React from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import CategoryCard from "../../../components/category/categoryCard/CategoryCard";
import CuisineType from "../../../components/cuisines/CuisineType";
import CuisineItem from "../../../components/cuisines/CuisineItem";
import { RecipeItem } from "../../../interfaces/interfaces";
import { useRouter } from "next/router";

interface CategoryProps {
  results: RecipeItem[];
}

const CategorySection = ({ results }: CategoryProps) => {
  const router = useRouter();
  const { categoryName } = router.query;
  console.log(categoryName);

  if (categoryName === "cuisine") {
    return (
      <CategoryCard>
        <CuisineItem title="italian" />
        <CuisineItem title="japanese" />
        <CuisineItem title="american" />
        <CuisineItem title="thai" />
      </CategoryCard>
    );
  }
  return (
    <CategoryCard>
      {results.map((result) => (
        <CuisineType
          key={result.id}
          href={`/categories/${categoryName}/${result.id.toString()}`}
          {...result}
        />
      ))}
    </CategoryCard>
  );
};

export default CategorySection;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryName = context.query.categoryName;
  console.log(categoryName);

  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${categoryName}&number=16`
  );
  const data = await response.json();
  const results = data.results;
  return {
    props: {
      results,
    },
  };
};
