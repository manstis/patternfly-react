import * as React from 'react';
import { Table, TableHeader, TableBody, TableProps, TableVariant, ICell, IRow } from '@patternfly/react-table';

interface TableState {
  columns: (ICell | string)[];
  rows: IRow[];
}

export class TableCompactDemo extends React.Component<TableProps, TableState> {
  static displayName = 'TableCompactDemo';
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Header cell' },
        'Branches',
        { title: 'Pull requests', props: { className: 'pf-u-text-align-center' } },
        '' // deliberately empty
      ],
      rows: [
        ['one', 'two', 'three', 'four'],
        ['one', 'two', 'three', 'four'],
        ['one', 'two', 'three', 'four']
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
