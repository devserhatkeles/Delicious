export interface RecipeItem {
  id: number;
  title: string;
  image: string;
}

export interface TrendProps {
  trends: RecipeItem[];
}

export interface VegetarianProps {
  vegetarian: RecipeItem[];
}

export interface DetailsItem {
  title: string;
  image: string;
  summary: string;
  instructions: string;
  readyInMinutes: number;
  healthScore: number;
  extendedIngredients: any[];
}
