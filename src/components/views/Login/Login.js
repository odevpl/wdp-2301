import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';
import { useState } from 'react';

const Login = () => {
  const loginForm = {
    email: 'admin',
    password: 'pass',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPasswordError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (email === loginForm.email && password === loginForm.password) {
      document.location = `${process.env.PUBLIC_URL}/`;
    } else {
      if (password !== loginForm.password) {
        setPasswordError('Hasło jest niepoprawne !');
        setPassword('');
        if (email !== loginForm.email) {
          setEmailError('Login jest niepoprawny !');
          setEmail('');
        }
      } else if (email !== loginForm.email) {
        setEmailError('Login jest niepoprawny !');
        setEmail('');
        if (password !== loginForm.password) {
          setPasswordError('Hasło jest niepoprawne !');
          setPassword('');
        }
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.loginLabel}>Email</label>
            <input
              className={styles.loginInput}
              type='text'
              name='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.loginLabel}>Hasło</label>
            <input
              className={styles.loginInput}
              type='password'
              name='hasło'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <p>
              Nie pamiętasz hasła?
              <a href='#'> Przypomnij hasło.</a>
            </p>
          </div>
          {emailError !== '' ? <div className={styles.error}>{emailError}</div> : ''}
          {passError !== '' ? <div className={styles.error}>{passError}</div> : ''}
          <div className={styles.buttons}>
            <NavLink style={{ textDecoration: 'none' }} exact to={'/'}>
              <button type='submit' className={styles.button} onClick={handleSubmit}>
                Zaloguj się
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
