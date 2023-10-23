import React from "react";
import { Grid } from "@ui5/webcomponents-react";
import { useAppSelector } from "../state/hooks";
import { RootState } from "../state/store";

const ResultsComponent: React.FC = () => {
  const movie = useAppSelector((state: RootState) => state.movie);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {movie.loading ? (
          <p>Loading...</p>
        ) : movie.error ? (
          <p>Error: {movie.error}</p>
        ) : movie.data ? (
          <Grid
            style={{ display: "flex", width: "100%" }}
            defaultSpan="XL4 L4 M6 S12"
          >
            <div style={{ flex: "1", padding: "16px" }}>
              <p>Title: {movie.data.title}</p>
              <p>Year: {movie.data.year}</p>
              <p>Genre: {movie.data.genre}</p>
            </div>
            <div style={{ flex: "1", padding: "16px" }}>
              <img
                src={movie.data.poster}
                alt={movie.data.title}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Grid>
        ) : (
          <p>No Movie has been found</p>
        )}
      </ul>
    </div>
  );
};

export default ResultsComponent;
