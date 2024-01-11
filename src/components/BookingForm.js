import React, { useState} from 'react'

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
         setDate(e);
         props.dispatch(e)
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} 
                            type='date' required/>
                        </div>

                        {/* time selection */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        {/* number of guests */}
                        <div>
                            <label htmlFor='book-guest'>Number of guests:</label>
                            <input id="book-guests" min='1' value={guests} onChange={(e) => setGuest(e.target.value)}/>
                               
                            
                        </div>

                        {/* Ocation field */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        {/* Submit button */}
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Make your Reservation"}/>
                        </div>
                    </fieldset>

                </form>
            </section>
        </header>
    );
};




export default BookingForm ;

