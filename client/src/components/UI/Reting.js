import React, { useState, useEffect, useContext } from "react";
// import { fetchReting, selectedRating } from "../../http/logoAPI";
// import { useParams } from "react-router-dom";
// import { Context } from "../../index";

const Reting = ({ listSuperpowerId, heroId }) => {
  console.log(listSuperpowerId,  heroId)

  // const { user } = useContext(Context);
  // const { id } = useParams();
  // const [reting, setReting] = useState();
  // const [yourReting, setYourReting] = useState();
  // const [hoveredIndex, setHoveredReting] = useState(yourReting);
  // const [quantityReting, setquantityReting] = useState(0);

  // useEffect(() => {
  //   try {
  //     fetchReting({ id, heroId, listSuperpowerId }).then((data) => {
  //       setReting(data[0].avgreting);
  //       setYourReting(data[0].userreting);
  //       setquantityReting(data[0].quantityreting);
  //       if (yourReting) {
  //         setHoveredReting(yourReting);
  //       }
  //     });
  //   } catch (error) {
  //     console.error("Error fetching retings:", error);
  //   }
  // }, [yourReting]);

  // const handleStarHover = (hoveredRating) => {
  //   setHoveredReting(hoveredRating);
  // };

  // const setRetingHover = (postedRating) => {
  //   setYourReting(postedRating);
  //   selectedRating({ listSuperpowerId, heroId, postedRating }).then((data) => {});
  // };

  // const handleStarLeave = () => {
  //   console.log(reting, yourReting, listSuperpowerId, heroId);
  //   setHoveredReting(yourReting);
  // };

  return (
    <div>
    {/*  {[...Array(10)].map((_, postedRating) => (
        <span
          key={postedRating}
          onMouseEnter={() => handleStarHover(postedRating + 1)}
          onMouseLeave={handleStarLeave}
          style={{
            padding: "1px",
            fontSize: "40px",
            cursor: "default",
            color:
              (hoveredIndex !== null && postedRating + 1 <= hoveredIndex) ||
              postedRating + 1 === yourReting
                ? "Goldenrod"
                : "Gold",
          }}
         
        >
           <div
            style={{
              padding: "1px",
              fontSize: "40px",
              display: "inline-block",
              color:
                (hoveredIndex !== null && postedRating + 1 <= hoveredIndex) ||
                postedRating + 1 === yourReting
                  ? "Moccasin"
                  : "Gold",
            }}
          >
            {postedRating + 1 <= reting ? (
              <span>★</span>
            ) : (
              <span
                style={{
                  color:
                    (hoveredIndex !== null &&
                      postedRating + 1 <= hoveredIndex) ||
                    "Black",
                }}
              >
                ☆
              </span>
            )}
          </div> 
        </span>
      ))}*/}
    </div>
  );
};

export default Reting;
