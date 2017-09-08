export const identified = (filteredByFilt, { id }) => {
    const result = filteredByFilt.find( el => {
        return el.id ===id
    })
    return result
} 