import React, {useState} from "react";

const useBookingForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
      if(event) {
          event.preventDefault();
      }

      alert(`
        Booking Created!
        Start Date: ${event.target.startDate.value}
        End Date: ${event.target.endDate.value}
    `);

  };


  const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]:event.target.value}))
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};



export default useBookingForm;


