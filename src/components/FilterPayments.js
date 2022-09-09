import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import './FilterPayments.css';

const FilterPayments = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { setFilter, setLoading } = useContext(Context);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'startDate') {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter({startDate, endDate});
    setLoading(true);
  };

  useEffect(() => {
    const initial_dates = () => {
      let start = new Date();
      start.setDate(1);
      start = start.toJSON().split('T');
      start = start[0];
      setStartDate(start);

      let end = new Date();
      end.setDate(end.getDate() + 90);
      end = end.toJSON().split('T');
      end = end[0];
      setEndDate(end);
      setFilter({"startDate": start, "endDate": end});
      setLoading(true);
    }
    initial_dates();
  }, [setFilter, setLoading]);

  return (
    <section>
      <p>Selecione o período desejado:</p>
      <div className="filter-payments__date">
        <label htmlFor="startDate" className="filter-payments__date__label">
          Data de início:
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={startDate}
            onChange={ handleChange }
          />
          </label>
        <label htmlFor="endDate" className="filter-payments__date__label">
          Data final:
          <input
            id="endDate"
            name="endDate"
            type="date"
            value={endDate}
            onChange={ handleChange }
            />
        </label>
        <button className="filter-payments__button__button" onClick={ handleSubmit }>Filtrar</button>
      </div>
    </section>
  );
}

export default FilterPayments;