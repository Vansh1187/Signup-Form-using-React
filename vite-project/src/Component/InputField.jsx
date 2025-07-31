// src/Component/InputField.jsx
import React from 'react';

const InputField = ({ label, value, onChange, type, name }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <label style={{ width: '120px', fontWeight: 'bold' }}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          flex: 1,
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #444',
          backgroundColor: '#2c2c2c',
          color: 'white'
        }}
      />
    </div>
  );
};

export default InputField;
