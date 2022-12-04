import React from "react";
import { GetServerSideProps } from "next";
import DetailsCard from "../../../components/details/DetailsCard";
import { DetailsProps } from "../../../interfaces/interfaces";

interface CuisineProps {
  details: DetailsProps;
}

const CuisineRecipe = ({ details }: CuisineProps) => {
  return <DetailsCard {...details} />;
};

export default CuisineRecipe;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug!;
  console.log(slug[1]);
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${slug[1]}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();

  return {
    props: {
      details: data,
    },
  };
};
