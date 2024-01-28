import React, { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSave = () => {
        console.log("Email:", email);
        console.log("Name:", name);
        console.log("Phone Number:", phoneNumber);
    };

    return (
        <div className="profile-card-container">
            <div className="profile-card">
                <form>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    <button type="button" onClick={handleSave}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileCard;