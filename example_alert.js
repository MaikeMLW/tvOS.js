if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['https://wesdegroot.github.io/tvOS.js/tvOS.js'], function (success) {
  if (success) {
    //
    // Show loading indicator with default text ('Loading')...
    tvOS.showLoadingIndicator()
    //
    // Timer!
    setTimeout(function () {
      // Remove Loading indicator...
      tvOS.removeLoadingIndicator()
      // Display a alert
      tvOS.alert('Hi 😀', 'i\m a:', ['apple', 'tv', 'app', '😎'], function (event) {
        //
        // Display another 'weird' Alert
        tvOS.alert('Hi 😀', 'Event=' + event + '\ncan i go back?', ['Reload'], function () {
          //
          // Display Loading screen with text Reloading
          tvOS.showLoadingIndicator('Please Wait')
          // Reload timer ;)
          setTimeout(function () {
            //
            // Finally. Reload
            tvOS.location('https://wesdegroot.github.io/tvOS.js/index.js')
          }, 3000)
        })
      })
    }, 1000)
  } else {
    console.log('Missing it all!')
  }
})
