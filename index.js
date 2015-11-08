if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['http://localhost:9001/tvOS.js'], function (success) {
  if (success) {
    var myList = []
    var myButtons = []

    myList.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'AlertView',
      subtitle: 'a example of AlertView',
      decoration: '',
      action: function (e) {
        tvOS.alert('Open ' + e + '?', '', ['Yes', 'No'], function (c) {
          if (c === 'Yes') {
            tvOS.dismiss()
            setTimeout(function () { //Weird bug fix.
              window.location('https://wesdegroot.github.io/tvOS.js/example_alert.js')
            }, 1000)
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
