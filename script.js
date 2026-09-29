const salesData = [
    { month: "Jan", category: "Electronics", sales: 42000 },
    { month: "Feb", category: "Fashion", sales: 35000 },
    { month: "Mar", category: "Electronics", sales: 52000 },
    { month: "Apr", category: "Books", sales: 28000 },
    { month: "May", category: "Electronics", sales: 61000 },
    { month: "Jun", category: "Fashion", sales: 48000 }
];

const filter = document.getElementById("categoryFilter");

function updateDashboard() {

    const selectedCategory = filter.value;

    const filteredData =
        selectedCategory === "all"
            ? salesData
            : salesData.filter(
                item => item.category === selectedCategory
            );


    // Total sales

    const totalSales = filteredData.reduce(
        (sum, item) => sum + item.sales,
        0
    );


    // Total orders

    const totalOrders = filteredData.length;


    // Average order

    const averageOrder =
        totalOrders > 0
            ? totalSales / totalOrders
            : 0;


    // Category totals

    const categoryTotals = {
        Electronics: 0,
        Fashion: 0,
        Books: 0
    };


    salesData.forEach(item => {

        categoryTotals[item.category] += item.sales;

    });


    // Find top category

    let topCategory = "-";
    let highestSales = 0;

    for (let category in categoryTotals) {

        if (categoryTotals[category] > highestSales) {

            highestSales = categoryTotals[category];

            topCategory = category;

        }

    }


    // Update cards

    document.getElementById("totalSales").textContent =
        "₹" + totalSales.toLocaleString("en-IN");

    document.getElementById("totalOrders").textContent =
        totalOrders;

    document.getElementById("averageOrder").textContent =
        "₹" + Math.round(averageOrder).toLocaleString("en-IN");

    document.getElementById("topCategory").textContent =
        topCategory;


    // Category values

    document.getElementById("electronicsValue").textContent =
        "₹" + categoryTotals.Electronics.toLocaleString("en-IN");

    document.getElementById("fashionValue").textContent =
        "₹" + categoryTotals.Fashion.toLocaleString("en-IN");

    document.getElementById("booksValue").textContent =
        "₹" + categoryTotals.Books.toLocaleString("en-IN");


    // Category progress bars

    const maximum = Math.max(
        categoryTotals.Electronics,
        categoryTotals.Fashion,
        categoryTotals.Books
    );


    if (maximum > 0) {

        document.getElementById("electronicsBar").style.width =
            (categoryTotals.Electronics / maximum * 100) + "%";

        document.getElementById("fashionBar").style.width =
            (categoryTotals.Fashion / maximum * 100) + "%";

        document.getElementById("booksBar").style.width =
            (categoryTotals.Books / maximum * 100) + "%";

    }


    // Monthly chart

    const chart = document.getElementById("salesChart");

    chart.innerHTML = "";

    let maxSales = 0;

    for (let item of filteredData) {

        if (item.sales > maxSales) {

            maxSales = item.sales;

        }

    }


    for (let item of filteredData) {

        const bar = document.createElement("div");

        bar.className = "bar";

        const height =
            (item.sales / maxSales) * 100;

        bar.style.height = height + "%";

        bar.innerHTML =
            "<span>₹" +
            Math.round(item.sales / 1000) +
            "K</span>";

        chart.appendChild(bar);

    }


    // Insight

    let insightText = "";

    if (filteredData.length === 0) {

        insightText =
            "No sales data available.";

    } else {

        insightText =
            topCategory +
            " currently has the highest sales contribution in the selected data.";

    }

    document.getElementById("insightText").textContent =
        insightText;

}


// Filter change

filter.addEventListener(
    "change",
    updateDashboard
);


// Initial dashboard

updateDashboard();
