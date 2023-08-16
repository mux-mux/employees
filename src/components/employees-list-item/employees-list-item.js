import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, onInputSalary, increase, rise } = props;

  let classNames = 'list-group-item d-flex justify-content-between';

  if (increase) {
    classNames += ' increase';
  }
  if (rise) {
    classNames += ' like';
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="rise"
        style={{ fontSize: 26 }}
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        aria-label="change the employee's salary"
        defaultValue={salary + '$'}
        onChange={onInputSalary}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          aria-label="nominate an employee for promotion"
          data-toggle="increase"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm"
          aria-label="delete an employee from a list"
          onClick={onDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
