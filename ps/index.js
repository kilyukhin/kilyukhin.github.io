(function() {
    const kathismsCount = 20;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const names = [
        "1. Ксения",
        "2. Андрей Красильщиков ",
        "3. Марина Ота",
        "4. Кирилл Илюхин ",
        "5. Анна Адли",
        "6. Антон Яновский ",
        "7. Михаил (Житомир)",
        "8. Татьяна Зыкова",
        "9. София Фролова",
        "10. Иоанна (Тояма)",
        "11. Анна Кузьмина ",
        "12. Елена Ивлева",
        "13. Владимир Аброскин",
        "14. Юлия",
        "15. Александра Лукова",
        "16. Ирина (Инна) Совгавань ",
        "17. Маргарита (Николай-до)",
        "18. Людмила Аверьянова ",
        "19. Ольга Докучаева ",
        "20. мон. Магдалина",
    ];
    const kathismas = [
        [  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,],
        [  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,],
        [  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,],
        [  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,],
        [  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,],
        [  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,],
        [  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,],
        [  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,],
        [  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,],
        [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9,],
        [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10,],
        [ 12, 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,],
        [ 13, 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,],
        [ 14, 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13,],
        [ 15, 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,],
        [ 16, 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,],
        [ 17, 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,],
        [ 18, 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,],
        [ 19, 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18,],
        [ 20,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,],
    ];

    function daysBetween(startDate, endDate) {
        const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        return (end - start) / millisecondsPerDay;
    }

    function getTodayIndex() {
        const diff = daysBetween(new Date(2026, 5 - 1, 30), new Date());
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
