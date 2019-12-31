$(document).ready(function () {
    setInterval(function () {
        var overrideTime = "" // moment('2019-02-14 12:00 PM')
        var t = moment()
        if (overrideTime) {
            t = overrideTime
            console.log(t)
        }
        var a_hour = t.format('h')
        var a_hourPlus1 = (parseInt(a_hour) + 1)
        var a_min = t.format('mm')
        var hrVal = a_hour
        var exactHour = false
        var firstHalfOfHour = true
        var shouldShowA = false
        var shouldShow5 = false
        var shouldShowMins = true
        var shouldShow10 = false
        var shouldShow20 = false
        var shouldShowQ = false
        var shouldShowHalf = false

        if (a_min >= 0 && a_min < 5) {
            shouldShowMins = false
            exactHour = true
        }
        else if (a_min >= 5 && a_min < 10) {
            shouldShow5 = true
        }
        else if (a_min >= 10 && a_min < 15) {
            shouldShow10 = true
        }
        else if (a_min >= 15 && a_min < 20) {
            shouldShowA = true
            shouldShowMins = false
            shouldShowQ = true
        }
        else if (a_min >= 20 && a_min < 25) {
            shouldShow20 = true
        }
        else if (a_min >= 25 && a_min < 30) {
            shouldShow20 = true
            shouldShow5 = true
        }
        else if (a_min >= 30 && a_min < 35) {
            shouldShowHalf = true
            shouldShowMins = false
        }
        else if (a_min >= 35 && a_min < 40) {
            shouldShow20 = true
            shouldShow5 = true
            firstHalfOfHour = false
        }
        else if (a_min >= 40 && a_min < 45) {
            shouldShow20 = true
            firstHalfOfHour = false
        }
        else if (a_min >= 45 && a_min < 50) {
            shouldShowA = true
            shouldShowQ = true
            shouldShowMins = false
            firstHalfOfHour = false
        }
        else if (a_min >= 50 && a_min < 55) {
            shouldShow10 = true
            firstHalfOfHour = false
        }
        else if (a_min >= 55 && a_min < 60) {
            shouldShow5 = true
            firstHalfOfHour = false
        }

        if (!firstHalfOfHour) { hrVal = a_hourPlus1 }
        for(var i = 1; i < 13; i++) {
            show('#hr' + i, false)    
        }
        show('#hr' + hrVal, true)
        show('#oclock', exactHour)
        show('#minIdTo', !firstHalfOfHour)
        show('#minIdPast', firstHalfOfHour && !exactHour)
        show('#minIdA', shouldShowA)
        show('#minIdFive', shouldShow5)
        show('#minIdMinutes', shouldShowMins)
        show('#minIdTen', shouldShow10)
        show('#minIdQuarter', shouldShowQ)
        show('#minIdTwenty', shouldShow20)
        show('#minIdHalf', shouldShowHalf)
    }, 1000)

    function show(id, show) {
        if (show == true) {
            $(id).attr('class', 'active')
        } else {
            $(id).attr('class', '')
        }
    }
})