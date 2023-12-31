import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value}
                onChange={e => onChange(e.target.value)}
        >
            <option disabled value="value1">{defaultValue}</option>
            {options.map(option =>
                <option key={option.name} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;