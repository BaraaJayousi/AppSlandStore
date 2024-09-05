import { Button, ButtonGroup } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";

interface Props{
  categories:string[]
}

//Button group component =>
// takes a list of categories and renders them in a group of buttons
const CategoriesFilter = ({categories}:Props) =>{
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const createPageURL = (category : string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    return `${pathname}?${params}`;
  }

  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      {categories.map((category) => {
        return (
          <Button href={createPageURL(category)}>{category}</Button>
        )
    })}
    </ButtonGroup>
  );
}

export default CategoriesFilter;
