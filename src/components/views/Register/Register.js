import styles from './Register.module.scss';
import React from 'react';

const Register = () => {
  return (
    <section>
      <div className={styles.register}>
        <div className={styles.formulage}>
          <div className={styles.checkAccount}>
            <input type='radio' />
            <span> Mam konto</span>
            <input type='radio' />
            <span> Nie mam konta</span>
          </div>
          <label>Podaj dane do rejestracji</label>
          <form className={styles.form}>
            <input type='email' placeholder='E-mail *' required />
            <input type='password' placeholder='Hasło *' required />
            <input type='password' placeholder='Powtórz hasło *' required />
            <div className={styles.toggleSwitch}>
              <label className={styles.switch}>
                <input type='checkbox' />
                <span className={styles.slider}>
                  <p className={styles.sliderText}>Pokaż hasło</p>
                </span>
              </label>
            </div>
            <div className={styles.checkBoxInput}>
              <div className={styles.singleInput}>
                <input type='checkbox' />
                <label className={styles.choseAll}> Zaznacz wszystkie</label>
              </div>
              <div className={styles.singleInput}>
                <input type='checkbox' />
                <label>
                  {' '}
                  Akceptuje warunki
                  <a href='#' className={styles.regulations}>
                    {' '}
                    regulaminu
                  </a>
                  *
                </label>
              </div>
              <div className={styles.singleInput}>
                <input type='checkbox' />
                <label> Tak, tak! Chcę otrzymywać JEŻowy newsletter</label>
              </div>
            </div>
            <div className={styles.navigation}>
              <a href='/'>{'<'} Wróć</a>
              <a href='/'>
                <button type='button' className={styles.button}>
                  Zarejestruj się
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
