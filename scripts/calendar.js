//YOU CAN IGNORE ALL THIS CODE AND JUMP TO LINE 162 TO ADD YOUR OWN CUSTOM EVENTS

$(document).ready(function() {
    //bunch of definitions, gives each month a length and a list of special events, and each day of the week scheduled events
    var days_of_week=["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
    var list_of_months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var months={
        "January":{
            number_of_days:31,
            special_events:{}
        },
        "February":{
            number_of_days:28,
            special_events:{}
        },
        "March":{
            number_of_days:31,
            special_events:{}
        },
        "April":{
            number_of_days:30,
            special_events:{}
        },
        "May":{
            number_of_days:31,
            special_events:{}
        },
        "June":{
            number_of_days:30,
            special_events:{}
        },
        "July":{
            number_of_days:31,
            special_events:{}
        },
        "August":{
            number_of_days:31,
            special_events:{}
        },
        "September":{
            number_of_days:30,
            special_events:{}
        },
        "October":{
            number_of_days:31,
            special_events:{}
        },
        "November":{
            number_of_days:30,
            special_events:{}
        },
        "December":{
            number_of_days:31,
            special_events:{}
        }
    };
    var calendar={
        monday: new day(["8:00pm - 9:00pm", "8:00pm - 9:00pm"], ["Fundamentals Class", "Regular Class"]),

        tuesday: new day([], []),

        wednesday: new day(["7:30pm - 8:30pm"], ["Regular Class"]),

        thursday: new day([], []),

        friday: new day(["6:30pm - 7:30pm", "6:30pm - 7:30pm"], ["Fundamentals Class", "Regular Class"]),

        saturday: new day([],[]),

        sunday:new day([],[])
    };

    var string_versions={
        'Sunday':calendar.sunday,
        'Monday':calendar.monday,
        'Tuesday':calendar.tuesday,
        'Wednesday':calendar.wednesday,
        'Thursday':calendar.thursday,
        'Friday':calendar.friday,
        'Saturday':calendar.saturday
    };

    //gets the current date,month,and year and sets it to the one being viewed
    var current_date=new Date();
    var current_month=list_of_months[current_date.getMonth()];
    var current_year=current_date.getFullYear();

    //function to create a day of the week
    function day(times, events){
        this.times=times;
        this.events=events;
    }

    //function to create a special event on a certain date
    function add_event(month,day,year,time,event_description){
        if (year==current_year){
            if (day in months[month].special_events){
                months[month].special_events[day].push([time,event_description]);
            }
            else{
                months[month].special_events[day]=[];
                months[month].special_events[day].push([time,event_description]);
            }
        }
    }

    //function to populate numbers, title, and dates on the calendar depending on the month
    function set_days(){
        var number_of_days;
        if(current_month=="February"){
            if ((parseInt(current_year,10)%4!=0)){
                number_of_days=months[current_month].number_of_days;
            }
            else{
                number_of_days=months[current_month].number_of_days+1;
            }
        }
        else{
            number_of_days=months[current_month].number_of_days;
        }
        var first_day_of_week=new Date(current_month+" 1, "+current_year).getDay();
        $(".day_label").each(function(){
            $(this).text("");
            $(this).removeClass("inactive_day");
        });
        for (var i=0;i<number_of_days;i++){
            $(".day_label:eq("+(i+first_day_of_week)+")").text((i+1).toString());
        }
        $(".day_label").each(function(){
            if ($(this).text()==""){
                $(this).addClass("inactive_day");
            }
        });
        $(".calendar_title").text(current_month+" "+current_year);
        $(".calendar_title").append(" (Icon Source: <a href='https://www.iconfinder.com/icons/809499/forward_media_control_multimedia_next_track_icon'>IconFinder</a>)");
    }

    //jumps to the next month when the next month button's pressed
    function next_month(){
        if (current_month=="December"){
            current_month="January";
            current_year=(parseInt(current_year)+1).toString();
        }
        else{
            current_month=list_of_months[list_of_months.indexOf(current_month)+1];
        }
        set_days();
    }

    //jumps to the previous month when the previous month is jumped
    function previous_month(){
        if (current_month=="January"){
            current_month="December";
            current_year=(parseInt(current_year)-1).toString();
        }
        else{
            current_month=list_of_months[list_of_months.indexOf(current_month)-1];
        }
        set_days();
    }

    //You can ignore all the other code and add any events below. To do that, type: add_event("THE MONTH YOU WANT", "THE DATE YOU WANT", "THE YEAR YOU WANT", "THE TIME RANGE FOR THE EVENT", "A BRIEF EVENT DESCRIPTION")





    add_event("December", "5", "2019", "1:00pm - 2:00pm", "Guest Lecturer");



























    //OK, here's where all the code starts again



    //set the calendar to the current date
    set_days();

    $("#next_month").on("click", function(){
        next_month();
    });

    $("#previous_month").on("click", function(){
        previous_month();
    });

    //when a specific day is clicked, show a pop up for all the events for that date
    $(".day_label").on("click", function(){
        if ($(this).hasClass("inactive_day")){
            return none;
        }
        $(".times").empty();
        $(".events").empty();
        $(".pop_up_title").text(current_month+" "+$(this).text()+", "+current_year);

        var checked_id=this.id;
        var current_day=string_versions[checked_id.slice(0,checked_id.length-6)];
        var number_of_events=current_day.times.length;

        if ($(this).text() in months[current_month].special_events){
            for (var i=0;i<months[current_month].special_events[$(this).text()].length;i++){
                if(months[current_month].special_events[$(this).text()][i][0]=="Cancelled"){
                    number_of_events=0;
                    break;
                }
                else{
                    $(".times").append("<li>"+months[current_month].special_events[$(this).text()][i][0]+"</li>");
                    $(".events").append("<li>"+months[current_month].special_events[$(this).text()][i][1]+"</li>");
                    number_of_events++;
                }
            }
        }
        if (number_of_events==0){
            $(".times").append("<li> Nothing Today</li>");
            $(".events").append("<li> No Practice Today</li>")
        }
        else{
            for (var i=0;i<number_of_events;i++){
                if (current_day.times[i]!=null){
                    $('.times').append("<li>"+current_day.times[i]+"</li>");
                    $('.events').append("<li>"+current_day.events[i]+"</li>");
                }
            }
        }
        $(".pop_up").removeClass("hidden");
    });
});
