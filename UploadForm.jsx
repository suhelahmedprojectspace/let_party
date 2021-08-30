import React, { useState } from 'react'
import './Style/UploadForm.css';
import ProgressBar from './ProgressBar';
const UploadForm = () => {
    const [file, setfile] = useState(null);
    const [error, seterror] = useState(null);

    const type = ['image/png', 'image/jpeg']
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && type.includes(selected.type)) {
            setfile(selected);
            seterror('');
        }
        else {
            setfile(null);
            seterror('please select an image file (png or jpeg)');

        }
    }
    return (
        <div>
            <form>
                <label>
                    <input type="file" onChange={changeHandler} />
                    <span>upload</span>
                </label>
                <div className="output">
                    {error && <div className="error">{error} </div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setfile={setfile} />}
                </div>
            </form>

        </div>
    )
}

export default UploadForm
