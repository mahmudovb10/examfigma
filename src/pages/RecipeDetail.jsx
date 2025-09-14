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
      <h1>{recipe.title}</h1>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={recipe.image?.small?.replace("./assets/images", "/assets")}
        />
        <img
          className="recipeImgId"
          src={recipe.image?.large?.replace("./assets/images", "/assets")}
          alt={recipe.title}
        />
      </picture>
      <div>
        <h1 className="reTitle">{recipe.title}</h1>
        <p className="recDesc">{recipe.overview}</p>
        <div>
          <div className=" times">
            <div className="serving__time">
              <img src="/assets/icon-servings.svg" alt="" /> Servings:{" "}
              {recipe.servings}
            </div>
            <div className="prep__time">
              <img src="/assets/icon-prep-time.svg" alt="" /> Prep:{" "}
              {recipe.prepMinutes} mins
            </div>
            <div className="cook__time">
              <img src="/assets/icon-cook-time.svg" alt="" /> Cook:{" "}
              {recipe.cookMinutes} mins
            </div>
          </div>
        </div>
        <div className="recInfo">
          <h1 className="rexIngr">Ingredients</h1>
          <div className="recIn">
            <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
            <p className="recInT">{recipe.ingredients[0]}</p>
            <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
            <p className="recInT">{recipe.ingredients[1]}</p>
            <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
            <p className="recInT">{recipe.ingredients[2]}</p>
            <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
            <p className="recInT">{recipe.ingredients[3]}</p>
            <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
            <p className="recInT">{recipe.ingredients[4]}</p>
            <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
            <p className="recInT">{recipe.ingredients[5]}</p>
            <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
            <p className="recInT">{recipe.ingredients[6]}</p>
            <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
            <p className="recInT">{recipe.ingredients[7]}</p>
            <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
            <p className="recInT">{recipe.ingredients[8]}</p>
          </div>
        </div>
        <div className="recIns">
          <h1 className="recInsTitle">Instructions:</h1>
          <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
          <p className="recInT">{recipe.instructions[0]}</p>
          <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
          <p className="recInT">{recipe.instructions[1]}</p>
          <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
          <p className="recInT">{recipe.instructions[2]}</p>
          <img className="recIc" src="/assets/icon-bullet-point.svg" alt="" />
          <p className="recInT">{recipe.instructions[3]}</p>
        </div>

        <div className="authItem">
          <h3 className="authTitle">Made with ❤️ and 🥑</h3>
          <div className="authAcc">
            <img src="/assets/icon-instagram.svg" alt="" />
            <img src="/assets/icon-bluesky.svg" alt="" />
            <img src="/assets/icon-tiktok.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
