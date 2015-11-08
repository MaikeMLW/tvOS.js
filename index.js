if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['https://wesdegroot.github.io/tvOS.js/tvOS.js'], function (success) {
  if (success) {
    var myList = []

    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/alertView.jpg',
      title: 'AlertView',
      subtitle: 'a example of AlertView',
      action: 'openAlertView'
    })
    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/alertView.jpg',
      title: 'AlertView',
      subtitle: 'a example of AlertView',
      action: 'openAlertView'
    })

    myList.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'Reload',
      subtitle: 'a example of Reload',
      action: 'list_reload'
    })

    tvOS.listView('TV Demo', myList, 'https://www.wdgwv.com/data/img/site/back.jpg', '100%', '100%')
  } else {
    console.log('Missing it all!')
  }
})

function openAlertView (e) {
  tvOS.alert('Open alertView?', '', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wesdegroot.github.io/tvOS.js/example_alert.js')
    } else {
      tvOS.dismiss()
    }
  })
}

function list_reload (e) {
  tvOS.alert('Reload?', '', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wesdegroot.github.io/tvOS.js/index.js')
    } else {
      tvOS.dismiss()
    }
  })
}
