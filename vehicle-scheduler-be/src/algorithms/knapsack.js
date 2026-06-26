export default function optimizeSchedule(tasks, availableHours) {
    const n = tasks.length;

    const dp = Array.from(
        { length: n + 1 },
        () => Array(availableHours + 1).fill(0)
    );

    for (let i = 1; i <= n; i++) {
        const { duration, score } = tasks[i - 1];

        for (let h = 0; h <= availableHours; h++) {
            if (duration <= h) {
                dp[i][h] = Math.max(
                    score + dp[i - 1][h - duration],
                    dp[i - 1][h]
                );
            } else {
                dp[i][h] = dp[i - 1][h];
            }
        }
    }

    const selectedTasks = [];

    let h = availableHours;

    for (let i = n; i > 0; i--) {
        if (dp[i][h] !== dp[i - 1][h]) {
            selectedTasks.push(tasks[i - 1]);
            h -= tasks[i - 1].duration;
        }
    }

    selectedTasks.reverse();

    const totalHours = selectedTasks.reduce(
        (sum, task) => sum + task.duration,
        0
    );

    const totalScore = selectedTasks.reduce(
        (sum, task) => sum + task.score,
        0
    );

    return {
        selectedTasks,
        totalHours,
        totalScore
    };
};