import React from 'react';

const CompanyInfo = (props) => {
    return (
        <div className="info-box">
            <h3>Company</h3>
            <p>name: {props.value[0].company.name}</p>
            <p>slogan: {props.value[0].company.catchPhrase}</p>
        </div>
    )
}

export default CompanyInfo;