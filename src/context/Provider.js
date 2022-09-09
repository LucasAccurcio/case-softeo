import { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  const context = {
    filter,
    setFilter,
    loading,
    setLoading,
  };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
