import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WithTemplate from './WithTemplate';

import DashboardContainer from '../Dashboard/Container/DashboardContainer';
import InventoryContainer from '../Inventory/Container/InventoryContainer';
import SupplierContainer from '../Supplier/Container/SuplierContainer';

const Navigation = () => {
  const Dashboard = WithTemplate(DashboardContainer);
  const Inventory = WithTemplate(InventoryContainer);
  const Supplier = WithTemplate(SupplierContainer);
  return (
    <Switch>
      <Route exac path='/supplier' component={Supplier} />
      <Route exac path='/inventory' component={Inventory} />
      <Route exac path='/' component={Dashboard} />
    </Switch>
  );
};

export default Navigation;
