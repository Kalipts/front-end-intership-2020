import React, {useState, useEffect} from "react";
import axios from "axios";


const useBookingForm = () => {
    const [inputs, setInputs] = useState({});
    let url = `${process.env.REACT_APP_API_URL}/api/booking`;
    const [booking, setBooking] = useState();
    const [showLoading, setShowLoading] = useState(false);

    const handleSubmit = (event) => {
        setShowLoading(true);
        event.preventDefault();
        let booking = {
            startDay: event.target.startDate.value,
            endDay: event.target.endDate.value,
            isDuration: false,
            details: event.target.details_booking.value,
            // set static id, need dynamic
            resourceId: "5e573c997eb8b27ac1545f1f"
        };
        axios.post(url, booking).then((result)=> {
            setShowLoading(false);
        }).catch((error)=> setShowLoading(false));
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


