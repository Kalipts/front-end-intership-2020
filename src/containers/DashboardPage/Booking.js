import React from 'react'
import BookingCard from '../../components/TableCalendar/BookingCard'

export default function Booking() {
    const {length,color,top,name,isDuration,hour} = this.props;

    return (
        <BookingCard length={length} color={color} top={top}>
            <BookingText>{name}</BookingText>
            {isDuration && (<BookingTime>{hour}</BookingTime>)}
        </BookingCard>
    )
}
