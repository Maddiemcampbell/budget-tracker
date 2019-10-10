import { connect } from 'react-redux';
import Summary from './Summary';

function mapStoreToProps(store) {
  return {
    expenseItems: store.expense.lineItems,
    incomeItems: store.income.lineItems
  };
}

export default connect(mapStoreToProps)(Summary);