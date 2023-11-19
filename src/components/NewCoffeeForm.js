import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function newCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(e) {
    e.preventDefault();
    props.onNewCoffeeCreation({
      name: e.target.name.value,
      origin: e.target.origin.value,
      roast: e.target.roast.value,
      price: parseInt(e.target.price.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input type='text' name='name' placeholder='Coffee name' required/>
        <input type='text' name='origin' placeholder='Coffee origin' required/>
        <select name='roast' defaultValue='Light' required>
          <option value='Light'>Light</option>
          <option value='Medium'>Medium</option>
          <option value='Dark'>Dark</option>
        </select>
        <input type='number' name='weight' placeholder='burlap sack in lb' defaultValue='130' min='0' max='500'/>
        <input type='number' name='price' placeholder='Price'required/>

        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

newCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default newCoffeeForm;