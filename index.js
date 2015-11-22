if (App === 'undefined') var App = {} // Eslint error.
if (tvOS === 'undefined') var tvOS = {} // Eslint error.
if (evaluateScripts === 'undefined') var evaluateScripts = {} // Eslint error.

evaluateScripts(['https://wdg.github.io/tvOS.js/tvOS.js'], function (success) {
  if (success) {
    var myList = []

    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/alertView.jpg',
      title: 'AlertView',
      subtitle: 'a example of AlertView',
      action: 'openAlertView'
    })

    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/compilationView.jpg',
      title: 'compilationView',
      subtitle: 'a example of compilationView',
      action: 'opencompilationView'
    })

    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/listView.jpg',
      title: 'listView',
      subtitle: 'a example of listView',
      action: 'openlistView'
    })

    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/loadingView.jpg',
      title: 'loadingView',
      subtitle: 'a example of loadingView',
      action: 'openloadingView'
    })

    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/ratingView.jpg',
      title: 'ratingView',
      subtitle: 'a example of ratingView',
      action: 'openratingView'
    })

    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/searchView.jpg',
      title: 'searchView',
      subtitle: 'a example of searchView',
      action: 'opensearchView'
    })

    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/exampleApp.jpg',
      title: 'Example App',
      subtitle: 'Example App',
      action: 'openExampleApp'
    })

    myList.push({
      image: 'https://wesdegroot.github.io/tvOS.js/images/exampleApp.jpg',
      title: 'YouTube Video!',
      subtitle: 'YouTube Video!',
      action: 'openYoutubeVideo'
    })

    myList.push({
      image: 'https://www.wdgwv.com/logo.png',
      title: 'Reload',
      subtitle: 'a example of Reload',
      action: 'list_reload'
    })

    tvOS.listView('TV Demo', myList, 'https://www.wdgwv.com/data/img/site/back.jpg')
  } else {
    console.log('Missing it all!')
  }
})

function openAlertView (e) {
  tvOS.alert('Open alertView?', '', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wdg.github.io/tvOS.js/example_alert.js')
    } else {
      tvOS.dismiss()
    }
  })
}

function opencompilationView (e) {
  tvOS.alert('Open compilationView?', '', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wdg.github.io/tvOS.js/example_compilation.js')
    } else {
      tvOS.dismiss()
    }
  })
}

function openlistView (e) {
  tvOS.alert('Open listView?', '', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wdg.github.io/tvOS.js/example_list.js')
    } else {
      tvOS.dismiss()
    }
  })
}

function openloadingView (e) {
  tvOS.alert('Open loadingView?', '', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wdg.github.io/tvOS.js/example_loading.js')
    } else {
      tvOS.dismiss()
    }
  })
}

function openratingView (e) {
  tvOS.alert('Open ratingView?', '(there is no go back!)', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wdg.github.io/tvOS.js/example_rating.js')
    } else {
      tvOS.dismiss()
    }
  })
}

function opensearchView (e) {
  tvOS.alert('Open searchView?', '(there is no go back!)', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wdg.github.io/tvOS.js/example_search.js')
    } else {
      tvOS.dismiss()
    }
  })
}

function openExampleApp (e) {
  tvOS.alert('Open Example App?', '(there is no go back!)', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wdg.github.io/tvOS.js/example_app.js')
    } else {
      tvOS.dismiss()
    }
  })
}

function openYoutubeVideo (e) {
  tvOS.alert('Open YouTube Video?', '(there is no go back!)', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wdg.github.io/tvOS.js/example_youtube.js')
    } else {
      tvOS.dismiss()
    }
  })
}

function list_reload (e) {
  tvOS.alert('Reload?', '', ['Yes', 'No'], function (c) {
    if (c === 'Yes') {
      tvOS.location('https://wdg.github.io/tvOS.js/index.js')
    } else {
      tvOS.dismiss()
    }
  })
}

// Becouse that weird eslint hates functions :/
// You don't need to use this ... this is just to hide those errors.
if (typeof openAlertView === 'undefined') console.log('ok')
if (typeof opencompilationView === 'undefined') console.log('ok')
if (typeof openlistView === 'undefined') console.log('ok')
if (typeof openloadingView === 'undefined') console.log('ok')
if (typeof openratingView === 'undefined') console.log('ok')
if (typeof opensearchView === 'undefined') console.log('ok')
if (typeof openExampleApp === 'undefined') console.log('ok')
if (typeof openYoutubeVideo === 'undefined') console.log('ok')
if (typeof list_reload === 'undefined') console.log('ok')
