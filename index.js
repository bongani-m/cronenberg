
     const schedule = require('node-schedule'),
      request = require('request')

 j = schedule.scheduleJob('*/1 * * * *', function(){
        console.log("boom, bam, bop");
      request.get('https://spotifystatus.herokuapp.com/cron');
      });