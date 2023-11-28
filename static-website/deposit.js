function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [balance, setBalance] = React.useState(100); // Initial balance
  const [depositAmount, setDepositAmount] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if (!validate(depositAmount, 'deposit amount')) return;
    setBalance(balance + depositAmount);
  const userToUpdate = ctx.users.find(user => user.balance !=null); 
  if (userToUpdate) {
	  
	    userToUpdate.balance += depositAmount;
      setDepositAmount(0);
  }else{
	  console.log('no user');
  }

  }

  function clearForm() {
    setDepositAmount(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit Funds"
      status={status}
      body={show ? (
        <>
          Deposit Amount<br />
          <input
            type="number"
            className="form-control"
            id="depositAmount"
            placeholder="Enter deposit amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(Number(e.currentTarget.value))}
          /><br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleDeposit}
          >
            Deposit
          </button>
        </>
      ) : (
        <>
          <p>Current Balance: ${balance}</p>
          <h5>Deposit Successful</h5>
          <button
            type="submit"
            className="btn btn-light"
            onClick={clearForm}
          >
            Make Another Deposit
          </button>
        </>
      )}
    />
  );
}
