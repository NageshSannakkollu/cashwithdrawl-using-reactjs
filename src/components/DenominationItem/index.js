// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationAmountDetails, deductAmount} = props
  const {value} = denominationAmountDetails

  const oneClickDeductAmount = () => {
    deductAmount(value)
  }
  return (
    <li className="amount-list">
      <button
        type="button"
        className="deduction-amount"
        onClick={oneClickDeductAmount}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
