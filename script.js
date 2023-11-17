document.addEventListener("DOMContentLoaded", function () {
    // Array representing days of the week
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    // Loop through each day in the days array
    days.forEach(function (day, index) {
      let slider = document.getElementById('slider-' + day.toLowerCase());

      // Get the dropdown list element for weeks
      let weekSelector = document.querySelector('.weeks');
      // Create a noUiSlider for the current slider element
      noUiSlider.create(slider, {
        start: [1, 7],
        connect: true,
        tooltips: [
          {
            to: function (value) {
              return days[Math.round(value) - 1];
            },
            from: function (value) {
              return days.indexOf(value) + 1;
            }
          },
          {
            to: function (value) {
              return days[Math.round(value) - 1];
            },
            from: function (value) {
              return days.indexOf(value) + 1;
            }
          }
        ],
        range: {
          'min': 1,
          'max': 7
        }
      });
      // Event listener for the 'update' event on the slider
      slider.noUiSlider.on('update', function (values) {
        let selectedDaysCount = Math.round(values[1]) - Math.round(values[0]) + 1;
        weekSelector.options[index].textContent = `Week ${index + 1} (${selectedDaysCount} days available)`;
      });
    });
  });
  