if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

// http://api.the-app-team.com/StartUp/

evaluateScripts(['https://wesdegroot.github.io/tvOS.js/tvOS.js'], function (success) {
  if (success) {
    // init App.
    var old_count = ''
    var myArray = []
    var count = 0

    // load data
    tvOS.ajax('http://api.the-app-team.com/StartUp/', 'GET', function (data) {
      data = JSON.parse(data)

      for (var i in data) {

        console.log(tvOS.safeString(data[i]['title']))

        myArray.push({
          // image: 'http://the-app-team.com/assets/images/logo.png', // hide image.
          title: data[i]['title'], // .replace('&', '&#38;'),
          description: data[i]['description'], // .replace('&', ' and ').replace('&', ' and ').replace('&', ' and ').replace('&', ' and '),
          subtitle: data[i]['date'],
          action: 'clickedOn',
          accessibilityText: 'None'
        })

        // Those nasty XML protectors need to be built in!
        count++
      }
    })

    var publish_checker = function () {
      if (old_count === count) {
        tvOS.listView('Meetups in Amsterdam', myArray, 'http://the-app-team.com/assets/images/logo.png')
      } else {
        old_count = count
        setTimeout(publish_checker, 100)
      }
    }
    setTimeout(publish_checker, 100)
  } else {
    console.log('Missing it all!')
  }
})

function clickedOn (event) {
  tvOS.alert(event, 'Return to example list?', ['Yes', 'No'], function (event) {
    if (event.toLowerCase() === 'yes') {
      tvOS.location('https://wesdegroot.github.io/tvOS.js/index.js')
    } else {
      tvOS.dismiss() // Remove alert!
    }
  })
}
