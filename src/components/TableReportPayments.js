import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { convertLocalDateToDate, convertISODateToDate } from '../utils/ConvertDate';

const TableReportPayments = () => {
  const { filter, loading, setLoading } = useContext(Context);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
        }); 
        setFilteredData([...filterData]);
        setLoading(false);
      }
    }
    filterData();
  }, [filter, data, setLoading]);

  const renderTable = () => (
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
                  <td>{ item.totalValue }</td>
                  <td>{ item.paymentMethod }</td>
                  <td>{ item.value }</td>
                </tr>
              )) }
            </tbody>
          </table>
      </>
    );

  return (
    <section>
      { loading ? <p>Loading...</p> : <>{ renderTable() }</> }
    </section>
  );
}

export default TableReportPayments;
