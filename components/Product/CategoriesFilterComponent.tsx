'use client';
import { _getAllCategories } from "@/Axios";
import { Button, ButtonGroup } from "@mui/material";
import Grid from '@mui/material/Grid2'
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



//Button group component =>
// takes a list of categories and renders them in a group of buttons
const CategoriesFilter =  () =>{
  const [categories, setCategories] = useState<string[]>([])
  const currentParams = useSearchParams();
  const pathname = usePathname();
  
  const createPageURL = (category : string) => {
    const params = new URLSearchParams(currentParams);
    params.set("category", category);
    return `${pathname}?${params}`;
  }
  useEffect(()=>{
    _getAllCategories().then(res => setCategories(['all',...res]))
  }, [])


  return (
    <Grid container justifyContent="center" spacing={2} sx={{my:2.5, width: '100%'}}>
      <ButtonGroup variant="text" aria-label="Basic button group"
        size='small'>
        {categories.map((category) => {
          return (
            
            <Button  variant={category === currentParams.get('category') ? "contained": "text"} key={category} href={createPageURL(category)}
            sx={{
              fontSize:{xs:'0.50rem', md:'1.25rem'}
            }}
            >{category}</Button>
          )
      })}
      </ButtonGroup>
    </Grid>
  );
}

export default CategoriesFilter;
