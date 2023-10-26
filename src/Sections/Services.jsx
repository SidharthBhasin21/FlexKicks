import React from "react";
import { services } from "../Constants";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
  return (
    <section className="flex max-container justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          label={service.label}
          imageURL={service.imgURL}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
};

export default Services;
