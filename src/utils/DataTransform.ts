import { ChategoryItem, Item } from "../sampleData/moreData";

export const transformData = (data: Object[]): ChategoryItem[] => {
  const transformSubdivision = (subdivision: any): ChategoryItem => ({
    id: subdivision.id,
    mainName: subdivision.mainName,
    orderName: "-",
    children: subdivision.supercategories.map(transformSupercategory),
  });

  const transformSupercategory = (supercategory: any): ChategoryItem => ({
    id: supercategory.id,
    mainName: supercategory.mainName,
    orderName: "-",
    children: supercategory.categories.map(transformCategory),
  });

  const transformCategory = (category: any): ChategoryItem => ({
    id: category.id,
    mainName: category.mainName,
    orderName: "-",
    children: category.subcategories.map(transformSubcategory),
  });

  const transformSubcategory = (subcategory: any): Item => ({
    id: subcategory.id,
    mainName: subcategory.mainName,
    orderName: "Placeholder Brand",
    checked: false,
  });

  return (data[0] as any[]).map((item: any) => ({
    id: item.id,
    mainName: item.mainName,
    orderName: "-",
    children: item.subdivisions.map(transformSubdivision),
  }));
};
