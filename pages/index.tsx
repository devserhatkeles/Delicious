import { GetStaticProps } from "next";
import { TrendProps, VegetarianProps } from "../interfaces/interfaces";
import VegetarianList from "../components/vegetarian/VegetarianList";
import TrendingList from "../components/trends/TrendingList";
import Hero from "../components/hero/Hero";
import styles from "../styles/Home.module.scss";

interface MainProps extends TrendProps, VegetarianProps {}

export default function Home({ trends, vegetarian }: MainProps) {
  return (
    <>
      <Hero />
      <div id="main" className={styles.home__content}>
        <VegetarianList vegetarian={vegetarian} />
        <TrendingList trends={trends} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const trendResponse = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
  );
  const vegetarianResponse = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=vegetarian&number=12`
  );
  const trendsData = await trendResponse.json();
  const trendRecipes = trendsData.recipes;
  const vegetarianData = await vegetarianResponse.json();
  const vegetarianRecipes = vegetarianData.results;

  return {
    props: { trends: trendRecipes, vegetarian: vegetarianRecipes },
  };
};
