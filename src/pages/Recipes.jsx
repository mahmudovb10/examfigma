import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Debounce funksiyasi: API chaqirishni harf yozishdan keyin 500ms kutadi
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function Recipes() {
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [search, setSearch] = useState("");

  // Debounced search to prevent input freeze
  const debouncedSearch = useDebounce(search, 500);

  // query params
  const queryParams = new URLSearchParams();
  if (prepTime && prepTime !== "cancel")
    queryParams.append("prepMinutes", prepTime);
  if (cookTime && cookTime !== "cancel")
    queryParams.append("cookMinutes", cookTime);
  if (debouncedSearch.trim() !== "")
    queryParams.append("slug", debouncedSearch.trim());

  const url = `https://json-api.uz/api/project/recipes/recipes${
    queryParams.toString() ? "?" + queryParams.toString() : ""
  }`;

  const { data, loading, error } = useFetch(url);
  const recipes = data?.data || data || [];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="recTitle text-2xl font-bold text-center mb-2">
        Explore our simple, healthy recipes
      </h1>
      <p className="recDesc text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Discover eight quick, whole-food dishes that fit real-life schedules and
        taste amazing. Use the search bar to find a recipe by name or
        ingredient, or simply scroll the list and let something delicious catch
        your eye.
      </p>

      {/* 🔍 Search input (dizayniga tegilmaydi) */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-[310px] max-w-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      <div className="selects flex gap-4 justify-center mb-6">
        <span className="prepTitle">Max Prep Time</span>
        <select
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          className="select selOne"
        >
          <option value="">Cancel</option>
          <option value="5">5 min</option>
          <option value="10">10 min</option>
        </select>

        <span className="cookTitle">Max Cook Time</span>
        <select
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
          className="select selTwo"
        >
          <option value="">Cancel</option>
          <option value="5">5 min</option>
          <option value="10">10 min</option>
          <option value="15">15 min</option>
          <option value="20">20 min</option>
        </select>
      </div>

      {loading && <p>Yuklanmoqda...</p>}
      {error && <p>Xatolik: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div className="card" key={recipe.id}>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={recipe.image.small.replace(
                  "./assets/images",
                  "/assets"
                )}
              />
              <img
                src={recipe.image.large.replace("./assets/images", "/assets")}
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
              <button className="card-btn">
                <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
