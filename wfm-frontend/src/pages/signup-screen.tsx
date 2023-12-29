import { FormEventHandler, useState } from 'react';
import Layout from '../components/layout';
import { useAppDispatch } from '../hooks';
import { signupAction } from '../store/api-actions';
import useValidationInput from '../hooks/use-validation-input';
import checkNameValidity from '../shared/check-first-name-validity';
import checkLoginValidity from '../shared/check-login-validity';
import checkPasswordValidity from '../shared/check-password-validity';
import FormInput from '../components/form-input';
import { RolesRU } from '../consts';
import FormSelect from '../components/form-select';

export default function SignUpScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const [first_name, setFirstName, firstNameError, processFirstNameValidation] = useValidationInput(
    checkNameValidity,
    'Имя должно состоять только из русских букв'
  );

  const [last_name, setLastName, lastNameError, processLastNameValidation] = useValidationInput(
    checkNameValidity,
    'Фамилия должна состоять только из русских букв'
  );

  const [patronymic, setPatronymic, patronymicError, processPatronymicValidation] = useValidationInput(
    checkNameValidity,
    'Отчество должнл состоять только из русских букв'
  );

  const [username, setLogin, loginError, processLoginValidation] = useValidationInput(
    checkLoginValidity,
    'Логин должен быть длинее 3 символов'
  );

  const [password, setPassword, passwordError, processPasswordValidation] = useValidationInput(
    checkPasswordValidity,
    'Пароль должен содержать латинские буквы и цифры'
  );

  const [role, setRole] = useState<string>();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (processFirstNameValidation() && processLastNameValidation() && processPatronymicValidation()
      && role && processLoginValidation() && processPasswordValidation()) {
      dispatch(signupAction({
        first_name: first_name,
        last_name: last_name,
        patronymic: patronymic,
        role: RolesRU[role],
        username: username,
        password: password,
      }));
    }
  };

  return (
    <Layout>
      <article className="signup">
        <h1 className="signup__title title-reset">Регистрация</h1>
        <form onSubmit={handleSubmit} className="signup__form" action="#">
          <FormInput value={first_name} setValue={setFirstName} placeholder='Имя' id='first-name' />
          <FormInput value={last_name} setValue={setLastName} placeholder='Фамилия' id='last-name' />
          <FormInput value={patronymic} setValue={setPatronymic} placeholder='Отчество' id='patronymic' />
          <FormSelect values={Object.keys(RolesRU)} selectedValue={role} setSelectedValue={setRole} placeholder='Роль' id='role' />
          <FormInput value={username} setValue={setLogin} placeholder='Логин' id='login' />
          <FormInput value={password} setValue={setPassword} placeholder='Пароль' id='password' />

          {(firstNameError || lastNameError || patronymicError || loginError || passwordError) &&
            <div className='signup__error-message'>
              <p>{firstNameError || lastNameError || patronymicError || loginError || passwordError}</p>
            </div>}
          <button className="signup__button btn-reset" type="submit">Зарегистрироваться</button>
        </form>
      </article>
    </Layout>
  );
}
