import React from "react";
import RecipeCard from "./recipecard";
import { AboutCards, PaddingBox } from "./recipestyles";

const recipes = (props) => {
  const {} = props;
  return (
    <div>
      <p>GetSlimed Recipes are copyrighted 2020 by AddySchneider.</p>
      <AboutCards>
        <PaddingBox>
          <RecipeCard
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            name={"Butter SLime"}
            image={""}
            track={"list of ingredients"}
          />
        </PaddingBox>
        <PaddingBox>
          <RecipeCard
            name={"Cloud Slime"}
            image={""}
            track={"list of ingredients"}
          />
        </PaddingBox>
        <PaddingBox>
          <RecipeCard
            name={"Clear Slime"}
            image={""}
            track={"list of ingredients"}
          />
        </PaddingBox>
        <PaddingBox>
          <RecipeCard
            name={"Clay SLime"}
            image={""}
            track={"list of ingredients"}
          />
        </PaddingBox>
        <PaddingBox>
          <RecipeCard
            name={"Gabby's Slime"}
            image={""}
            track={"list of ingredients"}
          />
        </PaddingBox>
      </AboutCards>
    </div>
  );
};

export default recipes;
