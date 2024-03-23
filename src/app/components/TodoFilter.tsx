interface TodoFilterProps {
    setFilter: (filter: string) => void;
}

function TodoFilter({setFilter}: TodoFilterProps) {
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
        </div>
    )
}
export default TodoFilter