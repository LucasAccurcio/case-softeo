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
      let date = new Date();

      let start = new Date(date.getFullYear(), date.getMonth(), 1);
      start = start.toJSON().split('T');
      start = start[0];
      setStartDate(start);

      let end = new Date(date.getFullYear(), date.getMonth() + 3, 0);
      end = end.toJSON().split('T');
      end = end[0];
      setEndDate(end);

      setFilter({"startDate": start, "endDate": end});
      setLoading(true);
    }
    initial_dates();
  }, [setFilter, setLoading]);

  return (
    <section className='filter-payments__container'>
      <fieldset className='filter-payments__fieldset'>
        <legend className='filter-payments__title'>Selecione o período desejado:</legend>
        {/* <p className='filter-payments__p'>Selecione o período desejado:</p> */}
        <div className="filter-payments__date">
          <div className='filter-payments__content__label'>
            <label htmlFor="startDate" className="filter-payments__date__label">
              Data de início:
              <input
                className='filter-payments__input'
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
                className='filter-payments__input'
                id="endDate"
                name="endDate"
                type="date"
                value={endDate}
                onChange={ handleChange }
                />
            </label>            
          </div>
          <div>
            <button className='filter-payments__button' onClick={ handleSubmit }>Filtrar</button>
          </div>
        </div>
      </fieldset>
    </section>
  );
}

export default FilterPayments;