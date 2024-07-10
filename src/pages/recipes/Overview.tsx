import { Component } from "../../types";
import { recipes } from "./Data";

interface OverviewProps {
  index: number;
}

export const Overview: Component<OverviewProps> = ({ index }) => {
  const recipe = recipes[index];
  return (
    <div>
      <section>
        <h1 className="text-3xl">Ingredients</h1>
        <ul className="flex flex-col gap-2">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.name}>
              {ingredient.amount} {ingredient.type} of {ingredient.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
