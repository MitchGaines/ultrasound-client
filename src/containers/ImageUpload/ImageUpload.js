import React from 'react';

import Button from '../../components/Button/Button';
import classes from './ImageUpload.module.css';

function ImageUpload() {
    return(
        <div className={classes.Uploader}>
            <p>Verasonics .mat file upload</p>
            <Button name="Upload" />
        </div>
    );
}

export default ImageUpload;