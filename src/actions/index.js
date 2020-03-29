export const setSortCriteria = (sortBy) => {
    console.log("Sort By=== ", sortBy);
    return {
        type: 'SORT_BY',
        payload: sortBy
    };
};

export const setSearchQuery = (searchQuery) => {
    console.log("Search Query=== ", searchQuery);
    return {
        type: 'SEARCH_QUERY',
        payload: searchQuery
    };
};