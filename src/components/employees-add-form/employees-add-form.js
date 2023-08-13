import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 2 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: '',
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add new Employee</h3>
        <form className="add-form d-flex flex-wrap gap-3" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Input name"
            name="name"
            araia-label="the name of the employee"
            minLength={3}
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary $"
            name="salary"
            araia-label="set a salary to an employee"
            required
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
