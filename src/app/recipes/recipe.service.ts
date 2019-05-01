import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A pasta',
      'This is a simple pasta recipe',
      'https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_960_720.jpg',
      [
        new Ingredient('Noodles', 100),
        new Ingredient('Parmesan', 15),
      ]
    ),
    new Recipe(
      'Pizza',
      'Best homemade pizza there is',
      'https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_960_720.jpg',
      [
        new Ingredient('Pizza dough', 200),
        new Ingredient('Cheese', 50),
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
