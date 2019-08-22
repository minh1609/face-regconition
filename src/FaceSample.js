import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import { rekognition } from "./aws-config";

const FaceSample = () => {
    const [imageData, setImageData] = useState("");
    const [result, setResult] = useState([{}]); //FaceDetail Array

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

    return (
        <div>
            <p>Enter your file</p>
            <input type="file" onChange={handleChange} />
        </div>
    );
};

export default FaceSample;
