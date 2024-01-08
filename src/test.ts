import { OldCategories } from './OldCategories';
import { NewCategories } from './NewCategories';

const map: Map<string, string | undefined> = new Map();
const subCategories: Map<string, Map<string, string>> = new Map();

const findCategoryFullMatch = (category: TreeModel) =>
  OldCategories.find(
    (oldCategory) =>
      oldCategory.title.trim().toLowerCase() ===
      category.title.trim().toLowerCase(),
  );

NewCategories.forEach((category) => {
  const fullMatch = findCategoryFullMatch(category);

  map.set(category.id, fullMatch?.id);
});

console.log(map);
