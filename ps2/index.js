(function() {
    const kathismsCount = 20;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const names = [
        "1. Людмила (иконописец)",
        "2. Алла Семёнова",
        "3. Элина (Грузия)",
        "4. Татьяна Огава",
        "5. Ирина Нагасава",
        "6. Ульяна Куликова",
        "7. Анна Сакамото",
        "8. Юлия Виноградова",
        "9. Фома (Кобэ)",
        "10. Анна Бакаева",
        "11. Татьяна Икеути",
        "12. Светлана Фудзивара",
        "13. Ирина Такамацу",
        "14. Елена Дорошевская",
        "15. Анна&nbsp;Ситникова, Оксана&nbsp;Отани",
        "16. Раиса",
        "17. София (клирос)",
        "18. Тигран",
        "19. Ольга Анашкина",
        "20. мон. Ксения",
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
        const diff = daysBetween(new Date(2026, 11 - 1, 11), new Date());
        return diff % kathismsCount;
    }

    function createDocument() {
        const today = new Date();
        const todayIndex = getTodayIndex();
        const columnCount = 1

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
