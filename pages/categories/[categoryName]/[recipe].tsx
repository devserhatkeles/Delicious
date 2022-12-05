import React, { useState } from "react";
import { GetServerSideProps } from "next";
import CategoryCard from "../../../components/category/categoryCard/CategoryCard";
import CuisineType from "../../../components/cuisines/CuisineType";
import DetailsCard from "../../../components/details/DetailsCard";
import { RecipeItem } from "../../../interfaces/interfaces";
import { useRouter } from "next/router";
import { DetailsItem } from "../../../interfaces/interfaces";

interface RecipeProps {
  results: RecipeItem[];
  details: DetailsItem;
}

const RecipeItem = ({ results, details }: RecipeProps) => {
  const router = useRouter();
  const { categoryName, recipe } = router.query;

  if (categoryName === "cuisine") {
    return (
      <CategoryCard>
        {results.map((result) => (
          <CuisineType
            key={result.id}
            href={`/categories/${categoryName}/${recipe}/${result.id.toString()}`}
            {...result}
          />
        ))}
      </CategoryCard>
    );
  } else {
    return <DetailsCard {...details} />;
  }
};

export default RecipeItem;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${context.query.recipe}&number=16`
  );
  const descResponse =
    context.query.categoryName !== "cuisine" &&
    (await fetch(
      `https://api.spoonacular.com/recipes/${context.query.recipe}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    ));
  const data = await response.json();
  const descData = descResponse ? await descResponse.json() : null;
  const results = data.results;
  console.log(descData.extendedIngredients.length);

  return {
    props: {
      results: results,
      details: descData,
    },
  };
};
