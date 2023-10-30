import React from "react";
import { reviews } from "../Constants";
import ReviewsCard from "../Components/ReviewsCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold text-2xl">
        What our <span className="text-coral-red">Custiomers </span>
        say?
      </h3>
      <p className="text-info m-auto mt-4 max-w-lg text-center">
        Hear geunine stories from out satisfied customers abour their
        exceptional experience with us.{" "}
      </p>
      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((item, i) => (
          <ReviewsCard
            key={item.customerName}
            imgURL={item.imgURL}
            customerName={item.customerName}
            feedback={item.feedback}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
