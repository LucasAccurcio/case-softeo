import Navbar from '../components/NavBar';
import FilterPayments from '../components/FilterPayments';
import ChartPayments from '../components/ChartPayments';
import TableReportPayments from '../components/TableReportPayments';

const Report = () => {
  return (
    <div>
      <Navbar title="Relatório de pagamentos" />
      <FilterPayments />
      <ChartPayments />
      <TableReportPayments />
    </div>
  );
}

export default Report;