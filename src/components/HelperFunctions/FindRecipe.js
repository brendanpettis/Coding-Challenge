// Helper function to pull out the right recipe to edit.
export function FindRecipe(context, params){
    return context.find((recipe) => recipe.id === params);   
}