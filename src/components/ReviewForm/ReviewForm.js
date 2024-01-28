import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./ReviewForm.css";

const ReviewForm = () => {
    const [formPopup, setFormPopup] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState("");

    const handleClick = () => {
        setFormPopup(true);
    };

    const handleFormClose = () => {
        setFormPopup(false);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleReviewChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <div className="review-form-container">
            <h1>Reviews</h1>
            <div className="review-form">
                <div className="row">
                <div className="grid-item">
                    <strong>S.No</strong>
                </div>
                <div className="grid-item">
                    <strong>Doctor Name</strong>
                </div>
                <div className="grid-item">
                    <strong>Doctor Specialty</strong>
                </div>
                <div className="grid-item">
                    <strong>Provide Review</strong>
                </div>
                <div className="grid-item">
                    <strong>Review Feedback</strong>
                </div>
                </div>
                <div className="row">
                <div className="grid-item">
                    <p>1</p>
                </div>
                <div className="grid-item">
                    <p>Dr. John Doe</p>
                </div>
                <div className="grid-item">
                    <p>Dentist</p>
                </div>
                <div className="grid-item">
                    <button onClick={handleClick} className="review-button">Give Review</button>
                </div>
                <div className="grid-item">
                    <p>{feedback}</p>
                </div>
                </div>
            </div>
        </div>
        <Popup open={formPopup} onClose={handleFormClose} className="review-form">
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="rating">Rating:</label>
                    <select id="rating" value={rating} onChange={handleRatingChange}>
                        <option value="">Select Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br />
                    <label htmlFor="review">Review:</label>
                    <textarea id="review" value={feedback} onChange={handleReviewChange}></textarea>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Popup>
        </>
    )
};

export default ReviewForm;