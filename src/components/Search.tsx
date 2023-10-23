import React, { useState } from "react";
import { Button, Input, FlexBox } from "@ui5/webcomponents-react";
import { useAppDispatch } from "../state/hooks";
import { fetchMovie, clearMovieData } from "../state/movieSlice";

const SearchComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(fetchMovie({ title: searchValue }) as any);
  };

  const handleReset = () => {
    setSearchValue("");
    dispatch(clearMovieData());
  };

  return (
    <div>
      <FlexBox alignItems="Start" justifyContent="Start">
        <Input
          placeholder="Enter a movie title"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="Text"
          style={{ marginRight: "5px" }}
        />
        <Button onClick={handleSearch} style={{ marginRight: "5px" }}>
          Search
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </FlexBox>
    </div>
  );
};

export default SearchComponent;
