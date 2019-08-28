import React, { useState, useEffect } from "react";
import { rekognition } from "./aws-config";

const ImageDetect = () => {
    const [image, setImage] = useState("");
    const [imageData, setImageData] = useState(""); //Data URL of image, use this to preview image

    const [result, setResult] = useState([{}]); //Array of FaceDetail Object
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setImage(e.target.files[0]);
    };

    const handleClick = () => {
        let reader = new FileReader();

        if (!image) {
            alert("You need to upload Image");
            return;
        }

        reader.readAsArrayBuffer(image);
        reader.onload = e => {
            let params = {
                Image: {
                    Bytes: reader.result
                }
            };
            setLoading(true);
            rekognition.recognizeCelebrities(params, (err, data) => {
                if (err) console.log(err);
                else {
                    setResult(data);
                    setLoading(false);
                }
            });
        };
    };

    const RenderLoadingButton = () => {
        if (loading === false) {
            return (
                <button
                    className="btn btn-primary mx-auto mb-4"
                    onClick={handleClick}
                >
                    Detect
                </button>
            );
        } else if (loading === true) {
            return (
                <button className="btn btn-primary mx-auto mb-4 disabled">
                    Loading ...
                </button>
            );
        }
    };

    useEffect(() => {
        if (image) {
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => {
                setImageData(reader.result);
            };
        }
    }, [image, imageData]);

    const renderSuccessResult = () => {
        if (result.CelebrityFaces) {
            return result.CelebrityFaces.map(e => (
                <div
                    key={e.Id}
                    className="d-flex justify-content-around alert alert-success mx-1"
                >
                    <strong>{e.Name}</strong>
                    <div>Match: {e.MatchConfidence} %</div>
                </div>
            ));
        }
    };

    const renderFailResult = () => {
        if (result.UnrecognizedFaces && result.UnrecognizedFaces.length > 0) {
            return (
                <div className="alert alert-danger">
                    <strong>{result.UnrecognizedFaces.length}</strong> faces can
                    not regconized
                </div>
            );
        }
    };

    return (
        <div>
            <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={handleChange}
                    accept="image/*"
                />
                <label className="custom-file-label" htmlFor="customFile">
                    {image.name || "Choose file"}
                </label>
            </div>

            <div className="text-center">
                <img src={imageData} className="mx-auto my-4" width={450} />
                <br />
                {RenderLoadingButton()}
            </div>
            {renderSuccessResult()}
            {renderFailResult()}
        </div>
    );
};

export default ImageDetect;
