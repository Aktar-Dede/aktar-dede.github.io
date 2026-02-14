(function () {
    const rows = document.querySelectorAll("table tr");
    const productsMap = new Map();

    rows.forEach((row, index) => {
        if (index === 0) return;

        const cells = row.querySelectorAll("td");
        if (cells.length < 7) return;

        const barcode = cells[1]?.innerText.trim();
        const fullName = cells[2]?.innerText.trim();
        const brand = cells[5]?.innerText.trim() || "AKTAR DEDE";
        const categoryRaw = cells[6]?.innerText.trim();

        if (!barcode) return;

        let name = fullName.replace(brand, "").trim();

        let category = categoryRaw
            ? categoryRaw.toUpperCase().trim()
            : "GENEL";

        if (!productsMap.has(barcode)) {
            productsMap.set(barcode, {
                barcode: barcode,
                name: name,
                brand: brand,
                category: category,
                price: 0.00
            });
        }
    });

    const products = Array.from(productsMap.values());

    console.log("let products = ");
    console.log(JSON.stringify(products, null, 4));
})();
