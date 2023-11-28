
function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [balance, setBalance] = React.useState(100); // Initial balance
  const [withdrawalAmount, setWithdrawalAmount] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleWithdrawal() {
    if (!validate(withdrawalAmount, 'withdrawal amount')) return;
	 const data = ctx.users.find(user => user.balance !=null); 
  
    if (withdrawalAmount > data.balance) {
      setStatus('Error: Insufficient funds');
      setTimeout(() => setStatus(''), 3000);
      return;
    }
	
   else if (data) {
	  
	    data.balance -= withdrawalAmount;
  }else{
	  console.log('no user');
  }
    setBalance(balance - withdrawalAmount);

    setWithdrawalAmount(0);
  }

  function clearForm() {
    setWithdrawalAmount(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Withdraw Funds"
      status={status}
      body={show ? (
        <>
          Withdrawal Amount<br />
          <input
            type="number"
            className="form-control"
            id="withdrawalAmount"
            placeholder="Enter withdrawal amount"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(Number(e.currentTarget.value))}
          /><br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleWithdrawal}
          >
            Withdraw
          </button>
        </>
      ) : (
        <>
          <p>Current Balance: ${balance}</p>
          <h5>Withdrawal Successful</h5>
          <button
            type="submit"
            className="btn btn-light"
            onClick={clearForm}
          >
            Make Another Withdrawal
          </button>
        </>
      )}
    />
  );
}
