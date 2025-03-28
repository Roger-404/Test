document.addEventListener('DOMContentLoaded', function() {
    let table = document.getElementById('financeTable');

    // Обработчик клика по строке таблицы
    table.addEventListener('click', function(event) {
        let target = event.target;
        if (target.tagName === 'TD') {
            let selectedRow = target.parentNode;
            let data = [];
            let title = selectedRow.cells[0].textContent; // Наименование из первого столбца
            
            // Преобразуем данные в числовой формат, учитывая возможные пробелы
            for (let i = 1; i < selectedRow.cells.length; i++) {
                let cellData = selectedRow.cells[i].textContent.trim().replace(/\s/g, ''); // Удаляем пробелы из строки
                data.push(parseInt(cellData)); // Преобразование в числовой формат и добавление в массив
            }
                
            // Создаем график Highcharts
            Highcharts.chart('container', {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'График для строки: ' + title
                },
                xAxis: {
                    categories: ['Данные 1', 'Данные 2', 'Данные 3']  // Названия для оси X
                },
                yAxis: {
                    title: {
                        text: 'Финансовые данные'
                    }
                },
                series: [{
                    name: title,
                    data: data,
                    color: 'green'
                }]
            });
        }
    });
});
