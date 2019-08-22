import React, { useState, useEffect } from "react";
import { rekognition } from "./aws-config";

const FaceSample = () => {
    const [imageData, setImageData] = useState("");
    const [result, setResult] = useState([{}]); //Array of FaceDetail Object

    const handleChange = e => {
        let params;

        var reader = new FileReader();
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onload = () => {
            params = {
                Image: {
                    Bytes: reader.result
                },
                Attributes: ["ALL"]
            };

            rekognition.detectFaces(params, (err, data) => {
                if (err) console.log(err);
                else {
                    console.log(data);
                }
            });
        };
    };

    const handleClick = () => {};

    const renderResult = () => {
        return <div>Hello</div>;
    };

    return (
        <div>
            <p>Enter your file</p>
            <input type="file" onChange={handleChange} />
            <button className="btn btn-primary" onClick={handleClick}>
                Detect
            </button>
            {renderResult()}
        </div>
    );
};

export default FaceSample;
