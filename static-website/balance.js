function Balance(){
const ctx = React.useContext(UserContext);

  return (
    <div>
      <h1>Balance</h1>
      <p>Your current balance is: ${ctx.users[0].balance}</p>
    </div>
  );
}



