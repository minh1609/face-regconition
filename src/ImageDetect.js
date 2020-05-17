import React, { useState } from "react";
import { rekognition } from "./aws-config";

//1: Upload to S3
//2: Regconition read data from S3
//3: Detect .....

const ImageDetect = () => {
    const [video, setVideo] = useState(""); //video

    const handleChange = (e) => {
        setVideo(e.target.files[0]);
    };

    return (
        <div className="custom-file">
            <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={handleChange}
                accept="image/*"
            />
            <label className="custom-file-label" htmlFor="customFile">
                {video.name || "Choose file"}
            </label>
        </div>
    );
};

export default ImageDetect;
