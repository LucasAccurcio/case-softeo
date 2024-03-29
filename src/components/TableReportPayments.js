import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { convertLocalDateToDate, convertISODateToDate } from '../utils/ConvertDate';
import currencyBRL from '../utils/ConvertToCurrencyBrl';
import './TableReportPayments.css';

const TableReportPayments = () => {
  const { filter, loading, setLoading, filteredData, setFilteredData } = useContext(Context);
  const [data, setData] = useState([]);


  useEffect(() => {
    const getData = () => {
      const localStorageData = localStorage.getItem('service');
      const parsedData = JSON.parse(localStorageData);
      setData([...parsedData]);
    }
    getData();
  }, []);

  useEffect(() => {
    function filterData () {
      if (filter.startDate && filter.endDate) {
        const startDate = convertISODateToDate(filter.startDate);
        const endDate = convertISODateToDate(filter.endDate);
        const filterData = data.filter((item) => {
          const dataReport = convertLocalDateToDate(item.paymentDate);
          if (startDate <= dataReport && dataReport <= endDate) {
            return item;
          }
        }).sort((a, b) => convertLocalDateToDate(a.paymentDate) - (convertLocalDateToDate(b.paymentDate))); 
        setFilteredData([...filterData]);
        setLoading(false);
      }
    }
    filterData();
  }, [filter, data, setLoading, setFilteredData]);

  const renderTable = () => {
    if (data.length > 0) {
      return (
        <>
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Paciente</th>
                <th>Valor Tratamento</th>
                <th>Forma de pagamento</th>
                <th>Valor da parcela</th>
              </tr>
            </thead>
            <tbody>
              { filteredData.map((item, index) => (
                <tr key={ index }>
                  <td>{ item.paymentDate }</td>
                  <td>{ item.fullname }</td>
                  <td>{ currencyBRL(item.totalValue) }</td>
                  <td>{ item.paymentMethod }</td>
                  <td>{ currencyBRL(item.value) }</td>
                </tr>
              )) }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5">
                  <p>
                    <strong>
                      Total a receber / recebido no período:&nbsp;
                      { currencyBRL(filteredData.reduce((prev, curr) => prev + parseFloat(curr.value), 0).toFixed(2)) }
                    </strong>
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
      </>
    )}
    return <p className='no-data'>Nenhum dado encontrado</p>
    };

  return (
    <section className='table-report-payments__container'>
      { loading ? <p>Loading...</p> : <>{ renderTable() }</> }
    </section>
  );
}

export default TableReportPayments;
