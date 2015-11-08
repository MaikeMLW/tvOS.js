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
      decoration: '',
      action: function (e) {
        tvOS.alert('Open ' + e + '?', '', ['Yes', 'No'], function (c) {
          if (c === 'Yes') {
            tvOS.location('https://wesdegroot.github.io/tvOS.js/example_alert.js')
          } else {
            tvOS.dismiss()
          }
        })
      }
    })

    myList.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'AlertView',
      subtitle: 'a example of AlertView',
      decoration: '',
      action: function (e) {
        tvOS.alert('Open ' + e + '?', '', ['Yes', 'No'], function (c) {
          if (c === 'Yes') {
            tvOS.location('https://wesdegroot.github.io/tvOS.js/example_alert.js')
          } else {
            tvOS.dismiss()
          }
        })
      }
    })

    tvOS.Compilation('TV Demo', 'In a few seconds', 'This will be easy!', 'https://www.wdgwv.com/logo.png', myList)
  } else {
    console.log('Missing it all!')
  }
})
