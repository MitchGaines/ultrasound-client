import React from 'react';
import Button from '../../components/Button/Button';
import classes from './ImageUpload.module.css';

function ImageUpload() {
    return(
        <div className={classes.Uploader}>
            <h4>Verasonics .mat file upload</h4>
            <Button name="Upload" />
        </div>
    );
}

export default ImageUpload;