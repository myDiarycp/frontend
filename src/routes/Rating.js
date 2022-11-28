import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

// values of the stars
const labels = {
  // 0.5: 'Horrible',
  1: "Horrible",
  // 1.5: 'Poor',
  2: "Poor",
  // 2.5: 'Ok',
  3: "Okay",
  // 3.5: 'Good',
  4: "Good",
  // 4.5: 'Excellent',
  5: "Excellent",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function HoverRating() {
  // set states of value and hover
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        size="large"
        // save value for day
        value={value}
        // precision to find value (1 star), (use .5 for half stars)
        precision={1.0}
        getLabelText={getLabelText}
        // set new star value
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // display the hover
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        // empty star display
        emptyIcon={<StarIcon style={{ opacity: 0.66 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

export default HoverRating;
