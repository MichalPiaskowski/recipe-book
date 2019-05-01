import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2015/08/21/18/19/spare-ribs-899306_960_720.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2015/08/21/18/19/spare-ribs-899306_960_720.jpg'
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
