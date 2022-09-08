import { useState } from "react";
import axios from "axios";

export default function LandingPage() {
    const [selectedFile, setSelectedFile] = useState(null) 

    function fileHandler(e) {
        setSelectedFile(e.target.files[0]);

    }
    function uploadHandler() {
        const fd = new FormData();
        fd.append('imageFile', selectedFile, selectedFile.name)
        axios.post('http://localhost:5006/user/upload', fd, {       // axios utils
        })
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div>
            Home page
            <div>
                <input type='file' name="imageFile" onInput={(e) => fileHandler(e)} />
                <button onClick={uploadHandler}>Upload</button>
            </div>
        </div>
    )
}
