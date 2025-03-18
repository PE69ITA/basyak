export default function ListOfAccounts({ accounts }) {
    return (
      <div>
        {accounts.map(account => (
          <div 
            key={account.id}
            style={{ 
              padding: "10px", 
              border: "1px solid #ddd", 
              margin: "5px 0" 
            }}
          >
            {account.name} ({account.role})
          </div>
        ))}
      </div>
    );
  }