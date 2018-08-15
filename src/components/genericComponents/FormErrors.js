import React from 'react';
import {ErrorTitles} from "../../config/constants";

const FormErrors = ({formErrors}) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <p key={i} className="alert alert-danger">{ErrorTitles[formErrors[fieldName]]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>;

export default FormErrors;