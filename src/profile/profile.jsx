import React from "react";
import PropTypes from "prop-types";
import MYimage from "../hk.jpg";

function Profile({ FullName, Bio, Profession, handleName }) {
    function MYimag() {
        return (
            <img
                style={{ width: "350px", height: "350px" }}
                src={MYimage}
                alt="myImage"
            />
        );
    }
    return (
        <div>
            <h1>Welcom</h1>
            {handleName}
            <MYimag />
            <h2>{FullName}</h2>
            <h3>{Bio}</h3>
            <h4>{Profession}</h4>
            <button
                style={{
                    width: "100px",
                    height: "30px",
                    backgroundColor: "green",
                }}
                onClick={() => handleName(FullName)}
            >
                clik
            </button>
        </div>
    );
}
Profile.defaultProps = {
    FullName: "Default title",
};
Profile.propTypes = {
    FullName: PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string,
    handleName: PropTypes.func,
};

export default Profile;
