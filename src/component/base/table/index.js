import { useTable } from 'react-table'
import Button from '../button'
import './style.css'


const Table = ({columns, data, onClick, paginate, page, handlePrev, handleNext}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      })
      // Render the UI for your table
      return (
        <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className='header-table'>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} onClick={() => onClick(row.original
                    )}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
          <br />
          {paginate && 
          <nav aria-label="Page navigation example potition">
          <ul class="pagination ">
            <li class="page-item"><a className={`page-link ${page <= 1 ?'disable' : ''}`} onClick={handlePrev}>Previous</a></li>
            <li className="page-item"><a className="page-link">{page}</a></li>
            <li className="page-item"><a className="page-link" onClick={handleNext}>Next</a></li>
          </ul>
        </nav>
            }
        </table>
        
        </>
        
        
      )
    }


export default Table