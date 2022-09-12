import { useContext, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { convertISODateToDate, convertLocalDateToDate } from '../utils/ConvertDate';
import Context from '../context/Context';
import monthsDictionary from '../utils/MonthsDictionary';
import './ChartPayments.css';

const ChartPayments = () => {
  const { filteredData, filter } = useContext(Context);
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    function dataToChart () {
      if (filter.startDate && filter.endDate) {
        const startDate = convertISODateToDate(filter.startDate);
        const endDate = convertISODateToDate(filter.endDate);

        let indexMonth = startDate.getMonth();
        let data = [];

        while (startDate < endDate) {
          const reduceMonthValues = filteredData.filter((item) => {
            const paymentDate = convertLocalDateToDate(item.paymentDate);
            if (paymentDate.getMonth() === indexMonth
              && paymentDate.getFullYear() === startDate.getFullYear()) {
              return item;
            }
          }).reduce((acc, item) => {
            return acc + parseFloat(item.value);
          }, 0);
          const responseData = [monthsDictionary[indexMonth], reduceMonthValues];
          
          data = [...data, responseData];
          startDate.setMonth(startDate.getMonth() + 1);
          indexMonth = startDate.getMonth();
        }
        setChartData([["Month", "Total"],...data]);
      }
    }
    dataToChart();
  }, [filteredData, filter]);


const options = {
  title: "Receita mensal",
  legend: { position: 'none' },
  vAxis: { title: "Valor" },
  hAxis: { title: "Mês" },
};

return (
  <section className="chart-payments-container">
    <Chart chartType="ColumnChart" width="100%" height="250px" data={chartData} options={options} />
  </section>
  );
}


export default ChartPayments;