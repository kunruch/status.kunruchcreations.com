$(document).ready(function () {

    var apiKey = 'm776535140-532aa29ae18195b1e80bc99e'; //read only api key
    sessionStorage.clear();

    //credit: http://creatiface.github.io/personal-portfolio/
    (function () {
        var uptimeRobotAPI = 'http://api.uptimerobot.com/getMonitors?apiKey=' + apiKey + '&responseTimes=1&responseTimesAverage=180&customUptimeRatio=7&format=json&noJsonCallback=1';
         console.log(uptimeRobotAPI);
        function setSiteStatusTemplate() {
            var projectData = JSON.parse(sessionStorage.getItem('siteStatus')),
                getTemplate = $('#status-cards-template').html(),
                template = Handlebars.compile(getTemplate),
                result = template(projectData);
            console.log(projectData);
            $('#status-cards').html(result);
        };

        if (sessionStorage.getItem('siteStatus')) {
            setSiteStatusTemplate();
        } else {

            $.getJSON(uptimeRobotAPI, function (project) {
                project.monitors.monitor[0].status = getStatusFromCode(project.monitors.monitor[0].status);
                var data = JSON.stringify(project.monitors.monitor[0]);
                console.log(data);
                sessionStorage.setItem('siteStatus', data);
                setSiteStatusTemplate();
            })
           .fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            });

        };
    })();

    function getStatusFromCode(code) {
        if(code == 0) return "paused";
        if(code == 1) return "N/A";
        if(code == 2) return "up";
        if(code == 8) return "seems down";
        if(code == 9) return "down";
    }
});


//http://api.uptimerobot.com/getMonitors?apiKey=m776535140-532aa29ae18195b1e80bc99e&logs=1&alertContacts=1&responseTimes=1&responseTimesAverage=180&monitors=15830-32696&customUptimeRatio=30&format=xml