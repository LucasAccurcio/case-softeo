import Navbar from '../components/NavBar';
import FilterPayments from '../components/FilterPayments';
import ChartPayments from '../components/ChartPayments';
import TableReportPayments from '../components/TableReportPayments';
import './Home.css';

const Report = () => {
  return (
    <div className='main-pages-container'>
      <Navbar title="Relatórios" />
      <FilterPayments />
      <ChartPayments />
      <TableReportPayments />
    </div>
  );
}

export default Report;