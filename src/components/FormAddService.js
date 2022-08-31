import { useEffect, useState } from "react";
import { validateName, validateTreatment, validateValue } from "../utils/Validations";  
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
      localStorage.setItem('service', JSON
        .stringify([...JSON.parse(localStorage.getItem('service')), service]));
      setService(INITIAL_SERVICE);
      setMessage({ ...message, sucess: 'Serviço cadastrado com sucesso!' });
    }
  }

  const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito', 'Pix', 'Transferência bancária'];
  const formsOfPayment = ['À vista', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'];

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
      } else {
        setBtnDisabled(true);
      }
    }
    validateForm();
  }, [service]);

  return (
    <div>
      <form>
        <fieldset>
          <legend>Cadastro de serviço</legend>
          <label htmlFor="fullname">
          Nome completo do paciente*:
            <input
              type="text"
              id="fullname"
              placeholder="Digite o nome completo do paciente"
              name="fullname"
              value={ service.fullname }
              onChange={ handleChange }
              onFocus={ () => setMessage({ ...message, fullname: '' }) }
              onBlur={ () => setMessage({ ...message, fullname: validateName(service.fullname) }) }
            />
            <p>{ message.fullname }</p>
          </label>

          <label htmlFor="treatment">
            Tratamento realizado*:
            <input
              type="text"
              id="treatment"
              placeholder="Digite o nome do tratamento realizado"
              name="treatment"
              value={ service.treatment }
              onChange={ handleChange }
              onFocus={ () => setMessage({ ...message, treatment: '' }) }
              onBlur={ () => setMessage({ ...message, treatment: validateTreatment(service.treatment) }) }
            />
            <p>{ message.treatment }</p>
          </label>

          <label htmlFor="value">
            Valor do tratamento realizado*:
            <input
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
            <p>{ message.value }</p>
          </label>

          <label htmlFor="paymentMethod">
            Método de pagamento*:
            <select
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

          <label htmlFor="formOfPayment">
            Forma de pagamento*:
            <select
              id="formOfPayment"
              name="formOfPayment"
              value={ service.formOfPayment }
              onChange={ handleChange }
            >
              <option value="">Selecione o método de pagamento</option>
              { formsOfPayment.map((formOfPayment) => (
                <option key={ formOfPayment } value={ formOfPayment }>
                  { formOfPayment }
                </option>
                )) }
            </select>
          </label>

          <label htmlFor="paymentDate">
            Data de pagamento*:
            <input type="date" id="paymentDate" name="paymentDate" value={ service.paymentDate } onChange={ handleChange } />
          </label>
          <p>{ message.paymentDate }</p>

          <button type="submit" onClick={ handleSubmit } disabled={ btnDisabled }>
            Cadastrar Serviço
          </button>

          { message.sucess !== '' && <div className="sucess">{ message.sucess }</div> }
        </fieldset>
      </form>
    </div>
  );
}

export default FormAddService;
