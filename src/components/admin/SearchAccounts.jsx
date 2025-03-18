export default function SearchAccounts({ onSearch }) {
    return (
      <input 
        type="text" 
        placeholder="Поиск по email..." 
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }