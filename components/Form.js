import React from 'react';

const Form = props => (

    <form onSubmit={props.doTranslation}> 
        <input type = "text" name="englishText" />
        <button> Translate </button>
    </form>
);

export default Form;