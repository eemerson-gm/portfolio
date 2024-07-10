import { useState } from "react";
import { Component } from "../../types";
import { recipes } from "./Data";
import { Overview } from "./Overview";

export const Recipes: Component = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  if (selectedRecipe === null) {
    return (
      <div className="flex flex-row flex-wrap justify-center">
        {recipes.map((recipe, index) => {
          return (
            <div
              key={recipe.title}
              className="m-2 shadow-lg cursor-pointer rounded-md overflow-hidden"
              onClick={() => setSelectedRecipe(index)}
            >
              <img alt={recipe.title} src="https://placehold.co/300x300" />
              <div className="p-4 flex flex-1 flex-col gap-1 w-[300px]">
                <h1 className="text-3xl">{recipe.title}</h1>
                <p className="text-gray-500 text-lg break-words">
                  {recipe.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return <Overview index={selectedRecipe} />;
};
