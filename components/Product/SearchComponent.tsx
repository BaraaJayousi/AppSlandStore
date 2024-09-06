'use client';
import {  InputAdornment, TextField } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

interface Props{
  onSearchInput: (searchTerm:string) => void
}
const SearchComponent = ({onSearchInput} : Props) =>{
  const router = useRouter();
  const currentParams = useSearchParams();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState(currentParams.get('search'))

  const createPageURL = (searchTerm : string) => {
    const params = new URLSearchParams(currentParams);
    params.set("search", searchTerm);
    return `${pathname}?${params}`;
  }



  return (
    <>
        <TextField fullWidth id="search" label="Search Products" variant="outlined"  value={searchTerm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(event.target.value);
            onSearchInput(event.target.value)
            }
          }
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />   
    </>
  );
}

export default SearchComponent;
