export const findByFieldAndUpdate = (items, item, field) => {
    const newTodos = items.map(x => {
        if(x[field] == item[field]) 
            return item;
        return x;
    });
    return newTodos;
}

