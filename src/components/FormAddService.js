import { useEffect, useState } from 'react';
import { validateName, validateTreatment, validateValue } from '../utils/Validations';
import saveNewService from '../utils/SaveNewService';
import './FormAddService.css';

const INITIAL_SERVICE = {
  fullname: '',
  treatment: '',
  value: '',
  paymentMethod: '',
  formOfPayment: '',
  paymentDate: '',
};

const INITIAL_MESSAGES = {
  fullname: '',
  treatment: '',
  value: '',
  paymentDate: '',
  sucess: '',
};

const FormAddService = () => {
  const [service, setService] = useState(INITIAL_SERVICE);
  const [message, setMessage] = useState(INITIAL_MESSAGES);
  const [alert, setAlert] = useState('* Todos o campos devem ser preenchidos!');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setService({
      ...service,
      [name]: value,
    });
    setMessage({ ...message, sucess: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateName(service.fullname) === ''
      && validateTreatment(service.treatment) === ''
      && validateValue(service.value) === ''
    ) {
      saveNewService(service);
      setService(INITIAL_SERVICE);
      setMessage({ ...message, sucess: 'Serviço cadastrado com sucesso!' });
    }
  }

  const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito', 'Pix', 'Transferência bancária'];
  const formsOfPayment = ['À vista', '2x', '3x', '4x', '5x'];

  useEffect(() => {
    const validateForm = () => {
      if (
        validateName(service.fullname) === ''
        && validateTreatment(service.treatment) === ''
        && validateValue(service.value) === ''
        && service.paymentMethod !== ''
        && service.formOfPayment !== ''
        && service.paymentDate !== ''
      ) {
        setBtnDisabled(false);
        setAlert('');
      } else {
        setBtnDisabled(true);
      }
    }
    validateForm();
  }, [service]);

  return (
    <div>
      <form className='form-add-service__container'>
        <fieldset className='form-add-service__fieldset'>
          <legend className='form-add-service__title'>Cadastro de serviço</legend>
          <label className='form-add-service__label' htmlFor="fullname">
            Nome completo do paciente:
            <input
              className='form-add-service__input'
              type="text"
              id="fullname"
              placeholder="Digite o nome completo do paciente"
              name="fullname"
              value={ service.fullname }
              onChange={ handleChange }
              onFocus={ () => setMessage({ ...message, fullname: '' }) }
              onBlur={ () => setMessage({ ...message, fullname: validateName(service.fullname) }) }
            />
            <p className='form-add-service__p'>{ message.fullname }</p>
          </label>

          <label className='form-add-service__label' htmlFor="treatment">
            Tratamento realizado:
            <input
              className='form-add-service__input'
              type="text"
              id="treatment"
              placeholder="Digite o nome do tratamento realizado"
              name="treatment"
              value={ service.treatment }
              onChange={ handleChange }
              onFocus={ () => setMessage({ ...message, treatment: '' }) }
              onBlur={ () => setMessage({ ...message, treatment: validateTreatment(service.treatment) }) }
            />
            <p className='form-add-service__p'>{ message.treatment }</p>
          </label>

          <label className='form-add-service__label' htmlFor="value">
            Valor do tratamento realizado:
            <input
              className='form-add-service__input'
              type="number"
              step={0.01}
              min={0}
              id="value"
              placeholder="Digite o valor do tratamento realizado"
              name="value"
              value={ service.value }
              onChange={ handleChange }
              onFocus={ () => setMessage({ ...message, value: '' }) }
              onBlur={ () => setMessage({ ...message, value: validateValue(service.value) }) }
            />
            <p className='form-add-service__p'>{ message.value }</p>
          </label>

          <label className='form-add-service__label' htmlFor="paymentMethod">
            Método de pagamento:
            <select
              className='form-add-service__select'
              id="paymentMethod"
              name="paymentMethod"
              value={ service.paymentMethod }
              onChange={ handleChange }
            >
              <option value="">Selecione o método de pagamento</option>
              { paymentMethods.map((paymentMethod) => (
                <option key={ paymentMethod } value={ paymentMethod }>
                  { paymentMethod }
                </option>
                )) }
            </select>
          </label>

          <label className='form-add-service__label' htmlFor="formOfPayment">
            Forma de pagamento:
            <select
              className='form-add-service__select'
              id="formOfPayment"
              name="formOfPayment"
              value={ service.formOfPayment }
              onChange={ handleChange }
            >
              <option value="">Selecione o método de pagamento</option>
              { service.paymentMethod === 'Cartão de crédito' ? (
                formsOfPayment.map((formOfPayment) => (
                <option key={ formOfPayment } value={ formOfPayment }>
                  { formOfPayment }
                </option>
                ))) : (
                  <option value="À vista">À vista</option>
                )}
            </select>
          </label>

          <label className='form-add-service__label' htmlFor="paymentDate">
            Data de pagamento:
            <input 
              className='form-add-service__input'
              type="date"
              id="paymentDate"
              name="paymentDate"
              value={ service.paymentDate }
              onChange={ handleChange }
            />
          </label>
          <p className='form-add-service__p'>{ message.paymentDate }</p>

          { alert && <p className='form-add-service__alert'>{ alert }</p> }

          <button
            className='form-add-service__button'
            type="submit"
            onClick={ handleSubmit }
            disabled={ btnDisabled }
          >
            Cadastrar Serviço
          </button>

          { message.sucess !== '' && <div className="sucess">{ message.sucess }</div> }
        </fieldset>
      </form>
    </div>
  );
}

export default FormAddService;
