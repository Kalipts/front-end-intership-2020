import React, { useState } from "react";

const useBookingForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    if (event.target.details_booking === undefined) {
      alert("chua co details");
    } else
      alert(`
        Booking Created!
        Start Date: ${event.target.startDate.value}
        End Date: ${event.target.endDate.value}
        Details: ${event.target.details_booking.value}
    `);
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useBookingForm;
