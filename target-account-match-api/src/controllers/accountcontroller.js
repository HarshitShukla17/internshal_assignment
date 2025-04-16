
import { readJSON, writeJSON } from '../utils/fileUtils.js';

 const getAccounts = async (_, res) => {
  const accounts = await readJSON('data/accounts.json');
  res.json(accounts);
};

 const updateAccountStatus = async (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const accounts = await readJSON('data/accounts.json');
  const index = accounts.findIndex(acc => acc.id === id);

  if (index === -1) return res.status(404).json({ message: 'Account not found' });

  accounts[index].status = status;
  await writeJSON('data/accounts.json', accounts);

  res.json({ message: 'Status updated', account: accounts[index] });
};

export { getAccounts, updateAccountStatus };
