import { useState, useEffect } from 'react';
import PanelNavigationAdmin from '../../components/admin/PanelNavigationAdmin';
import SearchAccounts from '../../components/admin/SearchAccounts';
import FilterAccounts from '../../components/admin/FilterAccounts';
import ListOfAccounts from '../../components/admin/ListOfAccounts';
import { fetchAccounts } from '../../api/admin';

export default function ListOfAccountsPage() {
  const [accounts, setAccounts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  useEffect(() => {
    fetchAccounts().then(data => setAccounts(data));
  }, []);

  const filteredAccounts = accounts.filter(acc => {
    const matchesSearch = acc.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || acc.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div>
      <PanelNavigationAdmin />
      <h2>Список аккаунтов</h2>
      <div style={{ margin: "20px 0" }}>
        <SearchAccounts onSearch={setSearchQuery} />
        <FilterAccounts onFilterChange={setFilterRole} />
      </div>
      <ListOfAccounts accounts={filteredAccounts} />
    </div>
  );
}