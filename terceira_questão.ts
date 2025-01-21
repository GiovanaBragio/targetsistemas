type DailyRevenue = {
    day: number;
    value: number;
};

const monthlyRevenue: DailyRevenue[] = [
    { day: 1, value: 221.34 },
    { day: 2, value: 300.0 },
    { day: 3, value: 0.0 }, 
    { day: 4, value: 100.2 },
    { day: 5, value: 0.0 }, 
    { day: 6, value: 400.5 },
    { day: 7, value: 350.3 },
    { day: 8, value: 150.6 }
];

function calculateRevenue(revenueData: DailyRevenue[]): void {
    const validDays = revenueData.filter((day) => day.value > 0);
    const values = validDays.map((day) => day.value);

    if (values.length === 0) {
        console.log("No valid revenue data available.");
        return;
    }

    const minRevenue = Math.min(...values);
    const maxRevenue = Math.max(...values);

    const totalRevenue = values.reduce((sum, value) => sum + value, 0);
    const averageRevenue = totalRevenue / values.length;

    const daysAboveAverage = values.filter((value) => value > averageRevenue).length;

    console.log(`Menor valor de faturamento: R$ ${minRevenue.toFixed(2)}`);
    console.log(`Menor valor de faturamento: R$ ${maxRevenue.toFixed(2)}`);
    console.log(`Dias com faturamento acima da média: ${daysAboveAverage}`);
}

calculateRevenue(monthlyRevenue);
