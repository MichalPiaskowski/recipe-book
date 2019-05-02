import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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
      'https://cdn.pixabay.com/photo/2016/03/05/21/46/american-1239081_960_720.jpg',
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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
