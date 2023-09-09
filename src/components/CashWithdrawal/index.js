// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {initialAmount: 2000}

  deductAmount = value => {
    this.setState(prevState => ({
      initialAmount: prevState.initialAmount - value,
    }))
  }

  render() {
    const {initialAmount} = this.state
    const {denominationsList} = this.props
    const name = 'Rahul Attuluri'
    const initial = name.slice(0, 1)
    console.log(initial)
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="name-initial-container">
            <div className="initial-container">
              <p className="initial-letter">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance-heading">Your Balance</p>
            <div className="amount-type-container">
              <p className="initial-amount">{initialAmount}</p>
              <p className="amount-type">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="check-sum-description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="amount-details-list">
            {denominationsList.map(eachRupees => (
              <DenominationItem
                denominationAmountDetails={eachRupees}
                key={eachRupees.id}
                deductAmount={this.deductAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
