
function NavBar() {
  const itemDescriptions = {
    'Create Account': 'Create a new bank account.',
    'Login': 'Log in to your account.',
    'Deposit': 'Deposit money into your account.',
    'Withdraw': 'Withdraw money from your account.',
    'Balance': 'Check your account balance.',
    'AllData': 'View all bank account data.',
  };

  const handleMouseOver = (itemName) => {
    const popup = document.querySelector(`#${itemName.replace(' ', '')}-popup`);
    popup.style.display = 'block';
  };

  const handleMouseLeave = (itemName) => {
    const popup = document.querySelector(`#${itemName.replace(' ', '')}-popup`);
    popup.style.display = 'none';
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BadBank</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {Object.keys(itemDescriptions).map((itemName) => (
              <li
                key={itemName}
                className="nav-item"
                onMouseOver={() => handleMouseOver(itemName)}
                onMouseLeave={() => handleMouseLeave(itemName)}
              >
                <a className="nav-link" href={`#/${itemName.replace(' ', '')}/`}>
                  {itemName}
                </a>
                <div
                  id={`${itemName.replace(' ', '')}-popup`}
                  className="popup-description"
                >
                  {itemDescriptions[itemName]}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}


function Spa() {
  return (
    <HashRouter>
	      <h1>Welcome to Bad Bank</h1>

      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

// Define your Home, CreateAccount, Login, Deposit, Withdraw, Balance, and AllData components here

ReactDOM.render(
  <Spa />,
  document.getElementById('root')
);
