import './app-filter.css';

const AppFilter = () => {
  const buttonsData = [
    { name: 'all', label: 'All Employees' },
    { name: 'rise', label: 'On promotion' },
    { name: 'increase', label: 'Price &gt; 1000$' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {});

  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All employees
      </button>
      <button className="btn btn-outline-light" type="button">
        On promotion
      </button>
      <button className="btn btn-outline-light" type="button">
        Price &gt; 1000$
      </button>
    </div>
  );
};

export default AppFilter;
