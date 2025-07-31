// src/Component/SignupForm.jsx
import React, { useState } from 'react';

const SignupForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email format is invalid';
      valid = false;
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess('Signup Successful!');
      setForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      setSuccess('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#1f1f1f',
        padding: '2rem',
        borderRadius: '10px',
        maxWidth: '400px',
        margin: '5vh auto',
        color: 'white',
        boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.05)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>User Signup</h2>

      {[
        { label: 'Name', type: 'text', name: 'name' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Password', type: 'password', name: 'password' },
        { label: 'Confirm Password', type: 'password', name: 'confirmPassword' }
      ].map(({ label, type, name }) => (
        <div key={name} style={{ display: 'flex', marginBottom: '1rem', alignItems: 'center' }}>
          <label style={{ width: '120px', fontWeight: 'bold' }}>{label}</label>
          <input
            type={type}
            name={name}
            value={form[name]}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #444',
              backgroundColor: '#2c2c2c',
              color: 'white',
            }}
          />
        </div>
      ))}

      {Object.entries(errors).map(([key, msg]) => (
        <p key={key} style={{ marginLeft: '120px', color: 'red', fontSize: '0.9rem', marginTop: '-10px' }}>
          {msg}
        </p>
      ))}

      <button
        type="submit"
        style={{
          backgroundColor: '#000',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          width: '100%',
          fontWeight: 'bold',
          marginTop: '1rem'
        }}
      >
        Sign Up
      </button>

      {success && (
        <p
          style={{
            color: '#4BB543',
            textAlign: 'center',
            marginTop: '1rem',
            fontWeight: '500'
          }}
        >
          {success}
        </p>
      )}
    </form>
  );
};

export default SignupForm;
