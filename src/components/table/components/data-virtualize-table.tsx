import {flexRender} from '@tanstack/react-table'
import {useVirtualizer} from '@tanstack/react-virtual'
import React from 'react'

import {tableTypeProps} from '../types'
import {DataTableColumnDateNumberFilter} from './data-table-column-date-number-filter'
import {DataTableSortHeader} from './data-table-column-header'
import {DataTableColumnSearch} from './data-table-column-search'
import {DataTableListFilter} from './data-table-list-filter'

import {cn} from '@/lib/utils'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'

export const VirtualizeTable = <TData,>({
	table,
	// isLoading,
	className,
	useTableFunctions,
}: Omit<tableTypeProps<TData>, 'columns'>) => {
	const tableContainerRef = React.useRef<HTMLDivElement>(null)
	const {rows} = table.getRowModel()

	const rowVirtualizer = useVirtualizer({
		count: rows.length,
		getScrollElement: () => tableContainerRef.current,
		estimateSize: () => 35,
		overscan: 5,
	})

	return (
		<div
			className={cn(['rounded-md border h-[800px] overflow-y-auto', className], {
				// 'overflow-hidden': isLoading,
			})}
			ref={tableContainerRef}
			style={{
				overflow: 'auto', // our scrollable table container
				position: 'relative', // needed for sticky header
				height: '800px', // should be a fixed height
			}}>
			{/* Even though we're still using sematic table tags, we must use CSS grid and flexbox for dynamic row heights */}
			<Table style={{display: 'grid'}}>
				<TableHeader
					style={{
						display: 'grid',
						position: 'sticky',
						top: 0,
						zIndex: 1,
						backgroundColor: 'white',
					}}>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id} style={{display: 'flex', width: '100%'}}>
							{headerGroup.headers.map(header => {
								const filterType = header.column.columnDef.meta?.filterOption?.type ?? 'search'

								return (
									<TableHead
										key={header.id}
										style={{
											display: 'flex',
											width: header.column.columnDef?.meta?.width ?? header.getSize(),
											minWidth: header.column.columnDef?.meta?.width ?? header.getSize(),
										}}>
										<div
											className={cn(['flex gap-1 items-center w-full '], {
												'justify-end': header.column.columnDef.meta?.isNumeric,
											})}>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
											{(() => {
												if (header.column.getCanFilter() && filterType === 'list') {
													return (
														<DataTableListFilter
															useTableFunctions={useTableFunctions}
															column={header.column}
															options={header.column.columnDef?.meta?.filterOption?.list}
														/>
													)
												}
												if (header.column.getCanFilter() && filterType === 'search') {
													return (
														<DataTableColumnSearch
															useTableFunctions={useTableFunctions}
															column={header.column}
														/>
													)
												}
												if (
													header.column.getCanFilter() &&
													(filterType === 'date' || filterType === 'number')
												) {
													return (
														<DataTableColumnDateNumberFilter
															useTableFunctions={useTableFunctions}
															type={filterType}
															column={header.column}
														/>
													)
												}
												if (header.column.getCanSort()) {
													return (
														<DataTableSortHeader
															useTableFunctions={useTableFunctions}
															column={header.column}
														/>
													)
												}

												return null
											})()}
										</div>
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody
					style={{
						display: 'grid',
						height: `${rowVirtualizer.getTotalSize()}px`, // tells scrollbar how big the table is
						position: 'relative', // needed for absolute positioning of rows
					}}>
					{rowVirtualizer.getVirtualItems().map(virtualRow => {
						const row = rows[virtualRow.index]
						return (
							<TableRow
								data-index={virtualRow.index} // needed for dynamic row height measurement
								ref={node => rowVirtualizer.measureElement(node)} // measure dynamic row height
								key={row.id}
								style={{
									display: 'flex',
									alignItems: 'center',
									position: 'absolute',
									transform: `translateY(${virtualRow.start}px)`, // this should always be a `style` as it changes on scroll
									width: '100%',
								}}>
								{row.getVisibleCells().map(cell => (
									<TableCell
										key={cell.id}
										style={{
											display: 'flex',
											width: cell.column.columnDef.meta?.width ?? cell.column.getSize(),
											minWidth: cell.column.columnDef.meta?.width ?? cell.column.getSize(),
											textOverflow: 'ellipsis',
											textAlign: cell.column.columnDef.meta?.isNumeric ? 'right' : 'left',
										}}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</div>
	)
}
