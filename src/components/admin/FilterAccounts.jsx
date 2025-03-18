export default function FilterAccounts({ onFilterChange }) {
    return (
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">Все</option>
        <option value="client">Клиенты</option>
        <option value="master">Мастера</option>
        <option value="admin">Админы</option>
      </select>
    );
  }