var csv = require('csv');

function clean() {
  csv()
    .from.path('data/Historical_Expenditures_Source.orig.csv')
    .transform(function(data, idx) {
      data = data.slice(0,13);
      if (idx > 0) { 
        // convert the year field from 1985-85 to 1984
        data[6] = data[6].split('-')[0];
        // fix up amount - note sometimes this field is empty!
        // amounts are in 1000s of dollars
        if (data[12]) {
          data[12] = parseInt(data[12].replace(',', '')) * 1000;
        } else {
          data[12] = 0;
        }
      }
      return data;
    })
    .to.path('data/Historical_Expenditures_Source.csv');
}

clean();
