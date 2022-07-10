function AllData(){
  const ctx = React.useContext(UserContext);
  return (
        <div className="container">
          <table class="table table-light">
            <thead>
              <tr>
                <th scope="col">User Number</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Account Balance</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map((user, index) => {
                return (
                  <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>$ {user.balance}</td>
                </tr>
                )              
              })}
              </tbody>
          </table>
        </div>
      );
}
