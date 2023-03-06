/**
 * Options for DataTables initialisation.
 */
export const dtOptions = (t) => ({
  filterType: undefined,
  selectableRowsHideCheckboxes: true,
  search: true,
  serverSide: true,
  pagination: true,
  responsive: 'standard',
  jumpToPage: true,
  // onDownload: (buildHead, buildBody, columns, data) => {
  //   return '\uFEFF' + buildHead(columns) + buildBody(data)
  // },
  textLabels: {
    body: {
      noMatch: t('datatable.body.no.match'),
      toolTip: t('datatable.body.tooltip'),
      columnHeaderTooltip: (column) =>
        t('datatable.column.header.tooltip', { columnLabel: column.label }),
    },
    pagination: {
      next: t('datatable.pagination.next'),
      previous: t('datatable.pagination.previous'),
      rowsPerPage: t('datatable.pagination.rows.per.page'),
      displayRows: t('datatable.pagination.display.rows'),
      jumpToPage: t('datatable.pagination.jump.to.page'),
    },
    toolbar: {
      search: t('datatable.toolbar.search'),
      downloadCsv: t('datatable.toolbar.download.csv'),
      print: t('datatable.toolbar.print'),
      viewColumns: t('datatable.toolbar.view.columns'),
      filterTable: t('datatable.toolbar.filter.table'),
    },
    filter: {
      all: t('datatable.filter.all'),
      title: t('datatable.filter.title'),
      reset: t('datatable.filter.reset'),
    },
    viewColumns: {
      title: t('datatable.view.columns.title'),
      titleAria: t('datatable.view.columns.title.aria'),
    },
    selectedRows: {
      text: t('datatable.selected.rows.text'),
      delete: t('datatable.selected.rows.delete'),
      deleteAria: t('datatable.selected.rows.delete.aria'),
    },
  },
})
