import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Recipes() {
  const { data, loading, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes"
  );

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  const recipes = data?.data || data || [];

  return (
    <div>
      <h1 className="recTitle">Explore our simple, healthy recipes</h1>
      <p className="recDesc">
        Discover eight quick, whole-food dishes that fit real-life schedules and
        taste amazing. Use the search bar to find a recipe by name or
        ingredient, or simply scroll the list and let something delicious catch
        your eye.
      </p>

      <div className="card-grid">
        {recipes.map((recipe) => (
          <div className="card" key={recipe.id}>
            <picture>
              <source media="(max-width: 768px)" srcSet={recipe.image.small} />
              <img
                src={recipes.image}
                alt={recipe.title}
                className="card-img"
              />
            </picture>
            <div className="card-body">
              <h3 className="card-title">{recipe.title}</h3>
              <p className="card-desc">{recipe.overview}</p>

              <div className="card-info">
                <div className="act">
                  <div className="serving">
                    <img src="/assets/icon-servings.svg" alt="" /> Servings:{" "}
                    {recipe.servings}
                  </div>
                  <div className="prep">
                    <img src="/assets/icon-prep-time.svg" alt="" /> Prep:{" "}
                    {recipe.prepMinutes} mins
                  </div>
                </div>
                <div className="cook">
                  <img src="/assets/icon-cook-time.svg" alt="" /> Cook:{" "}
                  {recipe.cookMinutes} mins
                </div>
              </div>

              <button className="card-btn">View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
