import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function RecipeDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes"
  );

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error}</p>;

  const recipes = data?.data || [];
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Topilmadi</p>;

  return (
    <>
      <h1>{recipe.title}</h1>;
    </>
  );
}

export default RecipeDetail;
