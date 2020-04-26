import React from 'react';

import Button from '../../components/Button/Button';
import classes from './NeuralNetForm.module.css';

function NeuralNetForm() {
    return(
        <div className={classes.NeuralNetForm}>
            <h4>Four Finger Convolution</h4>
            <h6>Pre-trained Model:</h6>
            <div className={classes.Radios}>
                <div>
                    <input type="radio" name="group1" id="radio-1" />
                        <label htmlFor="radio-1"><span>Both Data Sets</span></label>
                </div>
                <div>
                    <input type="radio" name="group1" id="radio-2" />
                        <label htmlFor="radio-2"><span>Fist & Relax</span></label>
                </div>
                <div>
                    <input type="radio" name="group1" id="radio-3" />
                    <label htmlFor="radio-3"><span>Pinch & Relax</span></label>
                </div>
            </div>
            <h6>Test Set:</h6>
            <div className={classes.Radios}>
                <div>
                    <input type="radio" name="group1" id="radio-4" />
                    <label htmlFor="radio-4"><span>Fist & Relax Test Set</span></label>
                </div>
                <div>
                    <input type="radio" name="group1" id="radio-5" />
                    <label htmlFor="radio-5"><span>Fist & Relax Training Set</span></label>
                </div>
                <div>
                    <input type="radio" name="group1" id="radio-6" />
                    <label htmlFor="radio-6"><span>Pinch & Relax Test Set</span></label>
                </div>
                <div>
                    <input type="radio" name="group1" id="radio-7" />
                    <label htmlFor="radio-7"><span>Pinch & Relax Training Set</span></label>
                </div>
            </div>
            <Button name="Graph Model" />
        </div>
    );
}

export default NeuralNetForm;
