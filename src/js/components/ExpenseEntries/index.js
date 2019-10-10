import { connect } from 'react-redux';
import ExpenseEntries from './ExpenseEntries';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    description: store.expense.description,
    amount: store.expense.amount,
    lineItems: store.expense.lineItems
  };
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(ExpenseEntries);