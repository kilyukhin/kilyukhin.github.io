(function() {
    const kathismsCount = 20;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const names = [
        "Люда",
        "Таня",
        "Лена Илюхина",
        "Лена",
        "Олег",
    ];
    const kathismas = [
        [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,],
        [ 5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,],
        [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,],
        [13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,],
        [17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,],
    ];

    function daysBetween(startDate, endDate) {
        const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        return (end - start) / millisecondsPerDay;
    }

    function getTodayIndex() {
        const diff = daysBetween(new Date(2023, 11 - 1, 21), new Date());
        return diff % kathismsCount;
    }

    function createDocument() {
        const today = new Date();
        const todayIndex = getTodayIndex();
        const columnCount = 5

        let html = '<thead><tr><th></th>';
        for (let col = 0; col < columnCount; col++) {
            const d = new Date(today.getTime() + millisecondsPerDay * col);
            const year = d.getFullYear();
            const month = d.getMonth() + 1;
            const day = d.getDate();
            const dateString = month + '.' + day;
            html += '<th>' + dateString + '</th>'
        }
        html += '</tr></thead>';

        html += '<tbody>';
        for (let row = 0 ; row < names.length; row++) {
            html += '<tr><td>' + names[row] + '</td>';
            for (let col = 0; col < columnCount; col++) {
                const d = (todayIndex + col + 100) % kathismsCount;
                html += '<td class="s">' + kathismas[row][d] + '</td>';
            }
            html += '</tr>';
        }
        html += '</tbody>';

        const div = document.createElement('table');
        div.innerHTML = html;
        document.getElementById('table').appendChild(div);
    }

    createDocument();
})();
