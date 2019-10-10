import React from 'react';

import {
    updateIncomeDescription,
    updateIncomeAmount,
    addIncome
} from './incomeActions';

export default class incomeEntries extends React.Component {
    constructor(props)  {
        super(props);
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);
        this.handleAddIncome = this.handleAddIncome.bind(this);
    }

    handleDescriptionInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateIncomeDescription(value));
    }

    handleAmountInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateIncomeAmount(value));
    }

    handleAddIncome() {
        const { description, amount, dispatch } = this.props;
        dispatch(addIncome(description, amount));
    }


    render() {
        const { description, amount, lineItems } = this.props;
        return (
            <div className='card border-success mb-3'>
                <div className='card-header text-white bg-success'>income Entries</div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='income-description'>Description</label>
                            <input
                                type='text'
                                className='form-control'
                                id='income-description'
                                value={ description }
                                onChange={ this.handleDescriptionInput }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='income-amount'>Amount</label>
                            <div className='input-group'>
                                <span className='input-group-addon'>$</span>
                                <input  
                                    type='text'
                                    className='form-control'
                                    id='income-amount'
                                    value={ amount }
                                    onChange={ this.handleAmountInput }
                                />
                            </div>
                        </div>
                        <button 
                            type='button'
                            className='btn btn-success col-12 mb-5'
                            onClick={ this.handleAddIncome }
                            >+ Add income
                        </button>
                        <table className='table table-sm table-hover'>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th style={{width:120}}>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lineItems.map(lineItem => (
                                        <tr>
                                            <td>{ lineItem.description }</td>
                                            <td>${ lineItem.amount.toFixed(2) }</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}