import React from 'react';
import MaterialTable from 'material-table';

const MTable = ({ data, columns, inventory, handleAdd, handleUpdate }) => {
  return (
    <div>
      <MaterialTable
        title={inventory ? 'Inventory List' : 'Supplier List'}
        data={data}
        columns={columns}
        options={{
          search: false,
          paging: false,
          filtering: true,
          exportButton: true,
          // fixedColumns: {
          //   left: 1,
          //   right: 1,
          // },
          sorting: true,
          //   tableLayout: 'fixed',
          rowStyle: {
            backgroundColor: '#EEE',
          },
        }}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: (e) => handleAdd(e),
          },
          {
            icon: 'edit',
            tooltip: 'Edit User',
            onClick: (e, rowData) => handleUpdate(rowData),
          },
        ]}
      />
    </div>
  );
};

export default MTable;
