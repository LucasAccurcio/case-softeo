import { useEffect, useState } from "react";
import currencyBRL from "../utils/ConvertToCurrencyBrl";
import saveNewService from "../utils/SaveNewService";
import './ListOfServices.css';

const ListOfServices = () => {
const [data, setData] = useState([]);
const [edit, setEdit] = useState(false);
const [indexService, setIndexService] = useState(null);
const [editData, setEditData] = useState({
  fullname: '',
  paymentDate: '',
  paymentMethod: '',
  formOfPayment: '',
  value: '',
  treatment: '',
});

  useEffect(() => {
    const getData = () => {
      const localStorageData = localStorage.getItem("simplifiedService");
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        setData([...parsedData]);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setEdit(false);
  }, [data]);

  const editForm = (index) => {
    setEdit(true);
    setEditData(() => ({
      fullname: data[index].fullname,
      paymentDate: data[index].paymentDate,
      paymentMethod: data[index].paymentMethod,
      formOfPayment: data[index].formOfPayment,
      value: data[index].value,
      treatment: data[index].treatment,
    }));
    setIndexService(index);
  };

  const deleteService = (index) => {
    const filteredData = data.filter((item, i) => i !== index);
    console.log(filteredData);
    setData(filteredData);
    localStorage.setItem('simplifiedService', JSON.stringify([]));
    localStorage.setItem('service', JSON.stringify([]));
    filteredData.forEach((item) => {
      saveNewService(item);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = data.map((item, index) => {
      if (index === indexService) {
        return editData;
      }
      return item;
    });
    setData(newData);
    localStorage.setItem('simplifiedService', JSON.stringify([]));
    localStorage.setItem('service', JSON.stringify([]));
    newData.forEach((item) => {
      saveNewService(item);
    });
  };

  const renderTable = () => {
    if (data.length > 0) {
      return (
        <>
          <table className="table-list-of-service">
            <thead className="thead-list-of-service">
              <tr className="tr-list-of-service">
                <th>Data</th>
                <th>Paciente</th>
                <th>Tratamento</th>
                <th>Valor Tratamento</th>
                <th>Método de pagamento</th>
                <th>Forma de pagamento</th>
              </tr>
            </thead>
            <tbody className="tbody-list-of-service">
              {data.map((item, index) => (
                <tr onClick={() => editForm(index)} className="tr-list-of-service" key={index}>
                  <td>{item.paymentDate}</td>
                  <td>{item.fullname}</td>
                  <td>{item.treatment}</td>
                  <td>{currencyBRL(item.value)}</td>
                  <td>{item.paymentMethod}</td>
                  <td>{item.formOfPayment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      return <p className="no-data">Nenhum serviço cadastrado</p>
  };

  return (
    <section>
      <form className="form-edit-service__container">
        <fieldset className="form-edit-service__fieldset">
          <legend className="form-edit-service__legend">Editar serviço</legend>
          <div className="form-edit-service__input-container">
            <label className="form-edit-service__label" htmlFor="fullname">
              Nome do Paciente:
              <input
                className="form-edit-service__input"
                type="text"
                id="fullname"
                placeholder="Nome do Paciente"
                name="fullname"
                onChange={ handleChange }
                value={ editData.fullname }
                disabled={!edit}
              />
            </label>
            <label className="form-edit-service__label" htmlFor="treatmeant">
              Tratamento:
              <input
                className="form-edit-service__input"
                type="text"
                id="treatmeant"
                placeholder="Tratamento realizado"
                name="treatmeant"
                onChange={ handleChange }
                value={ editData.treatment }
                disabled={!edit}
              />
            </label>
            <label className="form-edit-service__label" htmlFor="value">
              Valor Tratamento:
              <input
                className="form-edit-service__input"
                type="number"
                id="value"
                placeholder="Valor do tratamento"
                name="value"
                onChange={ handleChange }
                value={ editData.value }
                disabled={!edit}
              />
            </label>
            <label className="form-edit-service__label" htmlFor="value">
              Método de pagamento:
              <input
                className="form-edit-service__input"
                type="text"
                id="paymentMethod"
                placeholder="Valor do tratamento"
                name="paymentMethod"
                onChange={ handleChange }
                value={ editData.paymentMethod }
                disabled
              />
            </label>
            <label className="form-edit-service__label" htmlFor="value">
              Forma de pagamento:
              <input
                className="form-edit-service__input"
                type="text"
                id="formOfPayment"
                placeholder="Valor do tratamento"
                name="formOfPayment"
                onChange={ handleChange }
                value={ editData.formOfPayment }
                disabled
              />
            </label>
            <label className="form-edit-service__label" htmlFor="value">
              Data de pagamento:
              <input
                className="form-edit-service__input"
                type="text"
                id="paymentDate"
                placeholder="Valor do tratamento"
                name="paymentDate"
                onChange={ handleChange }
                value={ editData.paymentDate }
                disabled
              />
            </label>
          </div>
          <div className="form-edit-service__button-container">
            <button className="button-save-service" type="submit" onClick={ handleSubmit }>Salvar</button>
            <button className="button-delete-service" type="button" onClick={ () => deleteService(indexService) }>Deletar</button>
          </div>
        </fieldset>
      </form>
      <div className="table-list-of-service__container">
        { data  && renderTable() }
      </div>
    </section>
  );
}

export default ListOfServices;