import { Button, Empty, Skeleton } from 'antd';
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

import React from 'react';
import { matchSorter } from 'match-sorter';

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  return (
    <span>
      Search:{' '}
      <input
        id='inputGlobalSearch'
        className='inputSearchGlobalFilter'
        value={globalFilter || ''}
        onChange={(e) => {
          setGlobalFilter(e.target.value || undefined);
        }}
        placeholder={`${count} records...`}
      />
    </span>
  );
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      style={{ width: '100%' }}
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, {
    keys: [(row) => row.values[id]],
  });
}
fuzzyTextFilterFn.autoRemove = (val) => !val;

const renderPaginationOption = (data) => {
  const {
    pagination,
    gotoPage,
    canPreviousPage,
    previousPage,
    nextPage,
    canNextPage,
    pageCount,
    pageIndex,
    pageOptions,
    pageSize,
    setPageSize,
    preGlobalFilteredRows,
  } = data;
  if (pagination) {
    return (
      <div className='paginationTableReact'>
        <span>
          Total {preGlobalFilteredRows.length} entires | Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <div>
          Go to page:{' '}
          <input
            id='inputGoToPage'
            className='inputGoToPageTable'
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pages = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pages);
            }}
            style={{ width: '100px' }}
          />{' '}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSizes) => (
              <option key={pageSizes} value={pageSizes}>
                Show {pageSizes}
              </option>
            ))}
          </select>
        </div>
        <div className='navPagination'>
          <Button
            type='primary'
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            icon={<DoubleLeftOutlined />}
            ghost={true}
            id='btnStartPage'
          />{' '}
          <Button
            type='primary'
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            icon={<LeftOutlined />}
            ghost={true}
            id='btnNextPage'
          />{' '}
          <Button
            type='primary'
            onClick={() => nextPage()}
            disabled={!canNextPage}
            icon={<RightOutlined />}
            ghost={true}
            id='btnPrevPage'
          />{' '}
          <Button
            type='primary'
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            icon={<DoubleRightOutlined />}
            ghost={true}
            id='btnLastPage'
          />{' '}
        </div>
      </div>
    );
  }
  return null;
};

const renderBody = (
  prepareRow,
  pagination,
  getTableBodyProps,
  page,
  rows,
  headerGroups,
) => {
  const renderTbodyData = (dataLoop) => {
    if (dataLoop.length > 0) {
      return dataLoop.map((row, i) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            className={i % 2 === 0 ? '' : 'rowTableGrey'}
          >
            {row.cells.map((cell) => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
            })}
          </tr>
        );
      });
    }
    return (
      <tr>
        <td colSpan={headerGroups[0].headers.length}>
          <Empty />
        </td>
      </tr>
    );
  };
  if (pagination) {
    return (
      <tbody className='tbodyTableReact' {...getTableBodyProps()}>
        {renderTbodyData(page)}
      </tbody>
    );
  } else {
    return <tbody className='tbodyTableReact'>{renderTbodyData(rows)}</tbody>;
  }
};

const renderGlobalFilter = (
  useFilterGlobal,
  visibleColumns,
  preGlobalFilteredRows,
  state,
  setGlobalFilter,
) => {
  if (useFilterGlobal) {
    return (
      <tr>
        <th
          colSpan={visibleColumns.length}
          style={{
            textAlign: 'left',
          }}
        >
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </th>
      </tr>
    );
  }
  return null;
};

// Maian Function
export default function Table(props) {
  const {
    columns,
    data,
    pagination,
    useFilterGlobal,
    isLoading,
    serverSide,
    onFetchData,
    pageCount: controlledPageCount,
    pageIndex: controlledPageIndex,
    width,
  } = props;
  const FColumns = React.useMemo(
    () =>
      columns.filter((val) => {
        return val !== null;
      }),
    [columns],
  );

  //   Filter
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (Filter, id, filterValue) => {
        return Filter.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    [],
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: FColumns,
      data,
      defaultColumn,
      filterTypes,
      initialState: {
        pageIndex: serverSide ? controlledPageIndex : 0,
      },
      manualPagination: serverSide ? true : false,
      pageCount: serverSide ? controlledPageCount : Math.ceil(data.length / 10),
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  React.useEffect(() => {
    if (onFetchData) {
      onFetchData({ pageIndex, pageSize });
    }
  }, [onFetchData, pageIndex, pageSize]);

  const dataPagination = {
    pagination,
    gotoPage,
    canPreviousPage,
    previousPage,
    nextPage,
    canNextPage,
    pageCount,
    pageIndex,
    pageOptions,
    pageSize,
    setPageSize,
    preGlobalFilteredRows,
  };

  return (
    <Skeleton active={true} loading={isLoading}>
      <div className='containerTableGrid'>
        <div className='tableWrap'>
          <table
            className='tableReact'
            style={{ width: width ? width : '100%' }}
            {...getTableProps()}
          >
            <thead className='theadTableReact'>
              {headerGroups.map((headerGroup) => (
                <tr
                  className='trTableHead'
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => {
                    return (
                      <th
                        {...column.getHeaderProps(
                          column.disableSort
                            ? undefined
                            : column.getSortByToggleProps(),
                        )}
                        className={`thTableHeader ${column.headerClassName}`}
                      >
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </span>
                        <div>
                          {column.useFilter === true
                            ? column.render('Filter')
                            : null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
              {renderGlobalFilter(
                useFilterGlobal,
                visibleColumns,
                preGlobalFilteredRows,
                state,
                setGlobalFilter,
              )}
            </thead>
            {renderBody(
              prepareRow,
              pagination,
              getTableBodyProps,
              page,
              rows,
              headerGroups,
            )}
          </table>
        </div>
      </div>
      {renderPaginationOption(dataPagination)}
    </Skeleton>
  );
}

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

filterGreaterThan.autoRemove = (val) => typeof val !== 'number';

export function generateColumnData(data) {
  const columnData = [];
  columnData.push({
    headerClassName: 'headerDatatableClass',
    Header: 'No',
    accessor: 'No',
    className: 'numberIndexDatatable',
    Cell: (row) => parseInt(row.row.id, 10) + 1,
    width: 35,
  });
  for (const iterator of data) {
    iterator.headerClassName = 'headerDatatableClass';
    iterator.className = 'dataIndexDatatable';
    columnData.push(iterator);
  }
  return columnData;
}
