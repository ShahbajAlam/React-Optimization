export function ExpensiveComponent() {
    const length = 100_000;
    const expensiveArray = Array.from({ length }, (_, i) => i + 1);

    return (
        <ul>
            {expensiveArray.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}
