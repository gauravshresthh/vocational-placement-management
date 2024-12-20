export function getPaginationList(totalPages: number, currentPage: number) {
	// Ensure currentPage is within valid range
	const updatedCurrentPage = Math.max(1, Math.min(currentPage, totalPages))

	const maxVisiblePages = 5 // Maximum number of visible page numbers in the array

	if (totalPages <= maxVisiblePages) {
		// If total pages are less than or equal to the maximum visible pages, display all pages
		return Array.from({length: totalPages}, (_, i) => i + 1)
	}
	const halfVisiblePages = Math.floor(maxVisiblePages / 2)
	let startPage = Math.max(1, updatedCurrentPage - halfVisiblePages)
	let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

	// Adjust startPage and endPage if the current page is near the beginning or end
	if (endPage - startPage + 1 < maxVisiblePages) {
		startPage = Math.max(1, endPage - maxVisiblePages + 1)
	} else if (endPage - startPage + 1 > maxVisiblePages) {
		endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
	}

	return Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i)
}
