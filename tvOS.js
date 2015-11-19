//                        #######    ######              ##   ######
//                       ##     ##  ##    ##             ##  ##    ##
//                       ##     ##  ##                   ##  ##
//  ########  ##     ##  ##     ##   ######              ##   ######
//     ##      ##   ##   ##     ##        ##       ##    ##        ##
//     ##       ## ##    ##     ##  ##    ##  ###  ##    ##  ##    ##
//     ##        ###      #######    ######   ###   ######    ######
//
//                                                              v0.0.3
//
// tvOS.js
// (c) Wesley de Groot
// Licence: CC BY 4.0
//
// Please see:
// - https://github.com/wesdegroot/tvOS.js
// - https://www.wdgwv.com

// * tvOS empty function
// *
// * If it is missing (es-lint)
// *
// * @var function func
var func = function () { }

// * tvOS XMLHttpRequest Library
// *
// * If it is missing (es-lint)
// *
// * @var object XMLHttpRequest

if (typeof XMLHttpRequest === 'undefined') {
  var XMLHttpRequest = {}
}

// * tvOS Storage Library
// *
// * If it is missing (es-lint)
// *
// * @var object Storage
if (typeof Storage === 'undefined') {
  var Storage = {
    clear: func,
    getItem: func,
    key: func,
    length: func,
    removeItem: func,
    setItem: func
  }
}

// * tvOS MediaItem Library
// *
// * If it is missing (es-lint)
// *
// * @var object MediaItem
if (typeof MediaItem === 'undefined') {
  var MediaItem = {
    MediaItem: func,
    contentRatingDomain: func,
    contentRatingRanking: func,
    isExplicit: func,
    artworkImageURL: func,
    description: func,
    subtitle: func,
    title: func,
    type: func,
    url: func,
    highlightGroups: func,
    interstitials: func,
    resumeTime: func,
    loadAssetID: func,
    loadCertificate: func,
    loadKey: func
  }
}

// * tvOS Restrictions Library
// *
// * If it is missing (es-lint)
// *
// * @var object Restrictions
if (typeof Restrictions === 'undefined') {
  var Restrictions = {
    allowsExplicit: null,
    maxMovieRank: null,
    maxMovieRatingForCountry: null,
    maxTVShowRank: null,
    maxTVShowRatingForCountry: null
  }
}

// * tvOS Settings Library
// *
// * If it is missing (es-lint)
// *
// * @var object Settings
if (typeof Settings === 'undefined') {
  var Settings = {
    restrictions: null,
    language: null,
    onRestrictionsChange: null,
    storefrontCountryCode: null
  }
}

// * tvOS TVError Library
// *
// * If it is missing (es-lint)
// *
// * @var object TVError
if (typeof TVError === 'undefined') {
  var TVError = {
    code: null,
    description: null,
    domain: null,
    userInfo: null
  }
}

// * tvOS Player Library
// *
// * If it is missing (es-lint)
// *
// * @var object Player
if (typeof Player === 'undefined') {
  var Player = {
    overlayDocument: func,
    Player: func,
    playlist: func,
    present: func,
    pause: func,
    play: func,
    playbackState: func,
    seekToTime: func,
    setPlaybackRate: func,
    stop: func,
    currentMediaItem: func,
    nextMediaItem: func,
    previousMediaItem: func,
    mediaItemDidChange: func,
    mediaItemWillChange: func,
    requestSeekToTime: func,
    shouldHandleStateChange: func,
    stateDidChange: func,
    stateWillChange: func,
    timeBoundaryDidCross: func,
    timeDidChange: func,
    timedMetadata: func
  }
}

// * tvOS DOMParser Library
// *
// * If it is missing (es-lint)
// *
// * @var object DOMParser
if (typeof DOMParser === 'undefined') {
  var DOMParser = {
    parseFromString: func
  }
}

// * tvOS Playlist Library
// *
// * If it is missing (es-lint)
// *
// * @var object Playlist
if (typeof Playlist === 'undefined') {
  var Playlist = {
    item: func,
    length: null,
    Playlist: func,
    pop: func,
    push: func,
    splice: func
  }
}

// * tvOS MenuBarDocument Library
// *
// * If it is missing (es-lint)
// *
// * @var object MenuBarDocument
if (typeof MenuBarDocument === 'undefined') {
  var MenuBarDocument = {
    getDocument: func,
    setDocument: func,
    setSelectedItem: func
  }
}

// * tvOS navigationDocument Library
// *
// * If it is missing (es-lint)
// *
// * @var object navigationDocument
if (typeof navigationDocument === 'undefined') {
  var navigationDocument = {
    insertBeforeDocument: null,
    pushDocument: null,
    replaceDocument: null,
    dismissModal: null,
    presentModal: null,
    documents: null,
    clear: null,
    popDocument: null,
    popToDocument: null,
    popToRootDocument: null,
    removeDocument: null
  }
}

// * tvOS Keyboard Library
// *
// * If it is missing (es-lint)
// *
// * @var object Keyboard
if (typeof Keyboard === 'undefined') {
  var Keyboard = {
    text: null,
    onTextChange: func
  }
}

// * tvOS App Library
// *
// * If it is missing (es-lint)
// *
// * @var object App
if (typeof App === 'undefined') {
  var App = {
    onError: null,
    onLaunch: null,
    onExit: null,
    reload: func
  }
}

// * tvOS Device Library
// *
// * If it is missing (es-lint)
// *
// * @var object Device
if (typeof Device === 'undefined') {
  var Device = {
    systemVersion: null,
    appVersion: null,
    appIdentifier: null,
    model: null,
    productType: null,
    vendorIdentifier: null
  }
}

// * tvOS Library
// *
// * Making your work more easy!
// *
// * @var object tvOS
var tvOS = {

  // * tvOS.windows
  // *
  // * Wich windows are loaded?
  // *
  // * @var object windows
  windows: {
    windowActive: '',
    alertActive: false,
    loadingActive: false
  },

  // * tvOS.window
  // *
  // * Fake window object
  // *
  // * @var object window
  window: {
    // Just 'fake'.
  },

  // * tvOS.js
  // *
  // * tvOS.js
  // *
  // * @var object js
  js: {
    version: '0.0.3',
    date: '09-NOV-2015',
    release: 'beta',
    url: 'https://wdg.github.io/tvOS.js/tvOS.js'
  },

  // * tvOS.version
  // *
  // * The tvOS version.
  // *
  // * @var string version
  version: Device.systemVersion,

  // * tvOS.appVersion
  // *
  // * The current app version.
  // *
  // * @var string appVersion
  appVersion: Device.appVersion,

  // * tvOS.appIdentifier
  // *
  // * The current app Identifier.
  // *
  // * @var string appIdentifier
  appIdentifier: Device.appIdentifier,

  // * tvOS.model
  // *
  // * A string that identifies the device model.
  // *
  // * @var string model
  model: Device.model,

  // * tvOS.productType
  // *
  // * The version of the product installed on the Apple TV.
  // *
  // * @var string productType
  productType: Device.productType,

  // * tvOS.vendorIdentifier
  // *
  // * The universally unique identifier (UUID) of the device.
  // *
  // * @var string vendorIdentifier
  vendorIdentifier: Device.vendorIdentifier,

  // * tvOS.vendorIdentifier
  // *
  // * The universally unique identifier (UUID) of the device.
  // *
  // * @var string vendorIdentifier
  uuid: Device.vendorIdentifier,

  // * tvOS.translations
  // *
  // * The universal translation strings
  // *
  // * @var string translations
  translations: {
    en: { // English
      language: 'English',
      next: 'Next',
      previous: 'Previous',
      loading: 'Loading',
      title: 'Title',
      description: 'Description',
      help: 'Help',
      subtitle: 'Subtitle',
      again: 'Again',
      yes: 'Yes',
      no: 'No'
    },
    nl: { // Dutch
      language: 'Nederlands',
      next: 'Volgende',
      previous: 'Vorige',
      loading: 'Laden',
      title: 'Titel',
      description: 'Beschrijving',
      help: 'Help',
      subtitle: 'Onderschrift',
      again: 'Overnieuw',
      yes: 'Ja',
      no: 'Nee'
    },
    fy: { // Frisian (Dutch)
      language: 'Frysk',
      next: 'Folgjende',
      previous: 'Foarige',
      loading: 'Laden',
      title: 'Titel',
      description: 'Beskriuwing',
      help: 'Help',
      subtitle: 'ûnderskrift',
      again: 'Oernij',
      yes: 'Ja',
      no: 'Nee'
    },
    fr: { // French
      language: 'Français',
      next: 'Prochaine',
      previous: 'Antérieur',
      loading: 'Charge',
      title: 'Titre',
      description: 'Description',
      help: 'Aide',
      subtitle: 'Légende',
      again: 'À propos de New',
      yes: 'Oui',
      no: 'Non'
    },
    de: { // German
      language: 'Deutsch',
      next: 'Weiter',
      previous: 'Zurück',
      loading: 'Laden',
      title: 'Titel',
      description: 'Bezeichnung',
      help: 'Hilfe',
      subtitle: 'Bildunterschrift',
      yes: 'Ja',
      no: 'Nein'
    }
  },

  // * tvOS.lang
  // *
  // * The universal language
  // *
  // * @var string lang
  lang: Settings.language.split('-')[0].toLowerCase(),

  // * tvOS.device
  // *
  // * tvOS.device Device information
  // *
  // * @var object device
  device: {
    // * tvOS.device.version
    // *
    // * The tvOS version.
    // *
    // * @var string version
    version: Device.systemVersion,

    // * tvOS.device.appVersion
    // *
    // * The current app version.
    // *
    // * @var string appVersion
    appVersion: Device.appVersion,

    // * tvOS.device.appIdentifier
    // *
    // * The current app Identifier.
    // *
    // * @var string appIdentifier
    appIdentifier: Device.appIdentifier,

    // * tvOS.device.model
    // *
    // * A string that identifies the device model.
    // *
    // * @var string model
    model: Device.model,

    // * tvOS.device.productType
    // *
    // * The version of the product installed on the Apple TV.
    // *
    // * @var string productType
    productType: Device.productType,

    // * tvOS.device.vendorIdentifier
    // *
    // * The universally unique identifier (UUID) of the device.
    // *
    // * @var string vendorIdentifier
    vendorIdentifier: Device.vendorIdentifier,

    // * tvOS.device.vendorIdentifier
    // *
    // * The universally unique identifier (UUID) of the device.
    // *
    // * @var string vendorIdentifier
    uuid: Device.vendorIdentifier
  },

  /**
   * alert
   *
   * Display an Alert message
   *
   * @param string title the title
   * @param string description the description
   * @param array buttons the buttons
   * @param function callback the callback
   * @example tvOS.alert('Update Avable', 'Update now', ['Yes', 'No'], function (e) { console.log('Clicked: ' + event) })
   */
  alert: function (title, description, buttons, callback) {
    if (typeof description === 'undefined') description = ' '
    title = this.safeString(title)
    description = this.safeString(description)

    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
     <alertTemplate>
      <title>${title}</title>
      <description>${description}</description>`

    if (typeof buttons !== 'object') buttons = ['ok']

    for (var i = 0; i < buttons.length; i++) {
      alertString += `<button>
       <text>` + this.translate(this.safeString(buttons[i])) + `</text>
      </button>` // Auto translate, if exists!
    }

    alertString += `</alertTemplate>
    </document>`

    var parser = new DOMParser()
    var alertDoc = parser.parseFromString(alertString, 'application/xml')
    if (typeof callback !== 'undefined') {
      alertDoc.addEventListener('select', function (e) {
        // Fix nasty return
        var pressed = e.target.innerHTML
        pressed = pressed.split('>')[1]
        pressed = pressed.split('<')[0]

        // Human readable!
        callback(pressed)
      }, false)
    } else {
      alertDoc.addEventListener('select', function (e) {
        var pressed = e.target.innerHTML
        pressed = pressed.split('>')[1]
        pressed = pressed.split('<')[0]

        navigationDocument.dismissModal(alertDoc)
        tvOS.windows.alertActive = false
        return pressed
      }, false)
    }
    navigationDocument.presentModal(alertDoc)
    this.windows.windowActive = alertDoc
    this.windows.alertActive = true
  },

  /**
   * removeOldDocument
   *
   * Removes the old document
   *
   * @internal
   * @example tvOS.removeOldDocument()
   */
  removeOldDocument: function () {
    if (this.windows.windowActive !== '') {
      navigationDocument.dismissModal(this.windows.windowActive)
    }
  },

  /**
   * reload
   *
   * Reload the app
   *
   * @example tvOS.reload()
   */
  reload: function () {
    App.reload()
  },

  /**
   * makeDocument
   *
   * make Document with resource
   *
   * @param string resource the resource
   * @example tvOS.makeDocument(xmlString)
   */
  makeDocument: function (resource) {
    if (!tvOS.parser) {
      tvOS.parser = new DOMParser()
    }

    var doc = tvOS.parser.parseFromString(resource, 'application/xml')
    return doc
  },

  /**
   * showLoadingIndicator
   *
   * Show a loading indicator
   *
   * @param string [text] loading text
   * @param string [presentation] last presentation
   * @example tvOS.showLoadingIndicator(text, presentation)
   */
  showLoadingIndicator: function (text, presentation) {
    this.removeOldDocument()
    if (typeof text === 'undefined') {
      text = tvOS.translate('loading')
    }

    if (!this.windows.loadingIndicator) {
      this.loadingIndicator = this.makeDocument(this.loadingTemplate.replace('%s', text))
      this.windows.windowActive = this.loadingIndicator
    }

    if (!this.windows.loadingIndicator &&
        presentation !== 'modalDialogPresenter' &&
        presentation !== 'menuBarItemPresenter') {
      navigationDocument.pushDocument(this.loadingIndicator)
      this.windows.loadingIndicator = true
    }
  },

  /**
   * removeLoadingIndicator
   *
   * Remove the loading indicator
   *
   * @example tvOS.removeLoadingIndicator()
   */
  removeLoadingIndicator: function () {
    if (this.windows.loadingIndicator) {
      navigationDocument.removeDocument(this.loadingIndicator)
      this.removeOldDocument()
      this.windows.loadingIndicator = false
    }
  },

  /**
   * log
   *
   * to console.log (with support of objects)
   *
   * @param mixed object the object you want to parse
   * @example tvOS.log(object)
   */
  log: function (object) {
    if (typeof object === 'object') {
      for (var i in object) {
        console.log('[log] ' + i + ' = ' + object[i])
      }
    } else {
      console.log(object)
    }
  },

  /**
   * dismiss
   *
   * to dismiss a view
   *
   * @example tvOS.dismiss()
   */
  dismiss: function () {
    this.removeOldDocument() // Shortcut :)
  },

  /**
   * load
   *
   * internal function, do not use
   * loads the target of a 'listView'
   *
   * @internal
   * @param string event the event
   * @example tvOS.load(event)
   */
  load: function (event) {
    var ele = event.target
    // var templateURL = ele.getAttribute('template')
    // var presentation = ele.getAttribute('presentation')
    if (typeof event.target.getAttribute('presentation') === 'string') {
      try {
        var clicked = ele.childNodes.item(0).innerHTML.replace('\'', '\\\'')
        eval(event.target.getAttribute('presentation') + '(\'' + clicked + '\')') //eslint-disable-line
      } catch (err) {
        console.log('Error with callback')
        console.log(err)
      }
    }
  },

  /**
   * display
   *
   * to display a view
   *
   * @param mixed view the view you want to display
   * @example tvOS.display(view)
   */
  display: function (view) {
    navigationDocument.pushDocument(view)
  },

  /**
   * listView
   *
   * create a nice listView (with support of objects)
   *
   * @param string title the title of your listView
   * @param array list the list (see example)
   * @param string [banner] full url for banner (optional)
   * @example tvOS.listView(title, list, banner)
   */
  listView: function (title, list, banner, height, width) {
    if (typeof width === 'undefined') width = '1920'
    if (typeof height === 'undefined') height = '360'

    if (typeof banner === 'undefined') {
      banner = ''
    } else {
      banner = `<banner>
        <background>
          <img src="${banner}" width="${width}" height="${height}" />
        </background>
      </banner>`
    }

    var temp = tvOS.ListViewTemplate_before.replace('tvOS_title', this.safeString(title))
                                           .replace('tvOS_banner', (banner))

    if (typeof list === 'object') {
      for (var i = 0; i < list.length; i++) {
        if (typeof list[i]['subtitle'] !== 'undefined') {
          list[i]['subtitle'] = '<subtitle>' + this.safeString(list[i]['subtitle']) + '</subtitle>'
        }

        if (typeof list[i]['image_height'] === 'undefined') list[i]['image_height'] = 482
        if (typeof list[i]['image_width'] === 'undefined') list[i]['image_width'] = 857

        if (typeof list[i]['image'] !== 'undefined') {
          list[i]['image'] = '<img src="' + (list[i]['image']) + '" ' +
                             'width="' + list[i]['image_width'] + '" ' +
                             'height="' + list[i]['image_height'] + '" />' // TV ignores w+h.
        }

        temp += tvOS.ListViewTemplate_while.replace('tvOS_title', (
                                            (typeof list[i]['title'] !== 'undefined')
                                            ? this.safeString(list[i]['title'])
                                            : 'Help'
                                           ))
                                           .replace('tvOS_title', (
                                            (typeof list[i]['title'] !== 'undefined')
                                            ? this.safeString(list[i]['title'])
                                            : 'Help'
                                           ))
                                           .replace('tvOS_description', (
                                            (typeof list[i]['description'] !== 'undefined')
                                            ? this.safeString(list[i]['description'])
                                            : ''
                                           ))
                                           .replace('tvOS_subtitle', (
                                            (typeof list[i]['subtitle'] !== 'undefined')
                                            ? this.safeString(list[i]['subtitle'])
                                            : ''
                                           ))
                                           .replace('tvOS_subtitle', (
                                            (typeof list[i]['subtitle'] !== 'undefined')
                                            ? this.safeString(list[i]['subtitle'])
                                            : ''
                                           ))
                                           .replace('tvOS_action', (
                                            (typeof list[i]['action'] !== 'undefined')
                                            ? this.safeString(list[i]['action'])
                                            : 'tvOS._error'
                                           ))
                                           .replace('tvOS_image', (
                                            (typeof list[i]['image'] !== 'undefined')
                                            ? (list[i]['image'])
                                            : ''
                                           ))
                                           .replace('tvOS_template', (
                                            (typeof list[i]['template'] !== 'undefined')
                                            ? this.safeString(list[i]['template'])
                                            : 'none'
                                           ))
                                           .replace('tvOS_helpText', (
                                            (typeof list[i]['accessibilityText'] !== 'undefined')
                                            ? this.safeString(list[i]['accessibilityText'])
                                            : 'No help available'
                                           ))
      }
    } else {
      temp += tvOS.ListViewTemplate_while.replace('tvOS_title', 'Help')
                                         .replace('tvOS_title', 'Help')
                                         .replace('tvOS_description', 'Please read the manual')
                                         .replace('tvOS_action', 'tvOS._error')
                                         .replace('tvOS_image', 'https://www.wdgwv.com/logo.png')
                                         .replace('tvOS_template', 'none')
                                         .replace('tvOS_helpText', 'Error')
    }

    temp += tvOS.ListViewTemplate_after

    temp = this.makeDocument(temp)
    temp.addEventListener('select', tvOS.load.bind(tvOS))
    this.display(temp)
  },

  /**
   * RatingView
   *
   * create a nice RatingView (with support of objects)
   *
   * @todo
   * @param string title the title of your RatingView
   * @param string rating the default/averange rating
   * @param string [callback] function to relay on (Does not work)
   * @example tvOS.RatingView(title, rating, function (clicked) {
   * @example   console.log('Clicked on ' + clicked) // Does not work (yet)!
   * @example })
   */
  RatingView: function (title, rating, callback) {
    var temp = ''

    temp += tvOS.TemplateRatingView.replace('tvOS_title', this.safeString(title))
                                   .replace('tvOS_rating', rating)

    temp = tvOS.makeDocument(temp)
    temp.addEventListener('select', function (e) {
      console.log(e)
      var pressed = e.target.innerHTML
      console.log(pressed)
    })

    tvOS.display(temp)
  },

  /**
   * CompilationView
   *
   * create a nice CompilationView (with support of objects)
   *
   * @param string title the title of your CompilationView
   * @param string subtitle the subtitle of your CompilationView
   * @param string text the text of your CompilationView
   * @param string image the image of your CompilationView
   * @param array list the list (see example)
   * @param array [buttons] the buttons (see example)
   * @example tvOS.CompilationView(title, subtitle, text, image, items, buttons)
   */
  CompilationView: function (title, subtitle, text, image, items, buttons) {
    this.Compilation(title, subtitle, text, image, items, buttons)
  },

  /**
   * Compilation
   *
   * create a nice CompilationView (with support of objects)
   *
   * @param string title the title of your CompilationView
   * @param string subtitle the subtitle of your CompilationView
   * @param string text the text of your CompilationView
   * @param string image the image of your CompilationView
   * @param array list the list (see example)
   * @param array [buttons] the buttons (see example)
   * @example tvOS.Compilation(title, subtitle, text, image, items, buttons)
   */
  Compilation: function (title, subtitle, text, image, items, buttons) {
    var temp = ''
    var _buttons = ''

    if (typeof buttons !== 'undefined') {
      for (var b = 0; b < buttons.length; b++) {
        _buttons += `<buttonLockup>
                       <badge src="${buttons[b]['image']}" class="whiteButton" />
                       <title>${buttons[b]['title']}</title>
                     </buttonLockup>`
      }
    }

    temp += tvOS.CompilationView_before.replace('tvOS_title', this.safeString(title))
                                       .replace('tvOS_image', image)
                                       .replace('tvOS_subtitle', this.safeString(subtitle))
                                       .replace('tvOS_text', this.safeString(text))
                                       .replace('tvOS_buttons', _buttons)

    if (typeof items !== 'object') {
      items = [{
        title: 'Error',
        subtitle: 'Please read the readme',
        decoration: '🤓'
      }]
    }

    for (var i = 0; i < items.length; i++) {
      temp += tvOS.CompilationView_while.replace('tvOS_title', (
                                          (typeof items[i]['title'] !== 'undefined')
                                          ? this.safeString(items[i]['title'])
                                          : 'Error'
                                        ))
                                        .replace('tvOS_subtitle', (
                                          (typeof items[i]['subtitle'] !== 'undefined')
                                          ? this.safeString(items[i]['subtitle'])
                                          : ' '
                                        ))
                                        .replace('tvOS_decoration', (
                                          (typeof items[i]['decoration'] !== 'undefined')
                                          ? this.safeString(items[i]['decoration'])
                                          : ' '
                                        ))
                                        .replace('tvOS_item', i + 1)
    }

    temp += tvOS.CompilationView_after
    temp = tvOS.makeDocument(temp)
    temp.addEventListener('select', function (e) {
      var pressed = e.target.innerHTML
      pressed = pressed.split('<title')[1]
      pressed = pressed.split('/title>')[0]
      pressed = pressed.split('>')[1]
      pressed = pressed.split('<')[0]

      for (var s = 0; s < items.length; s++) {
        if (pressed === items[s]['title']) {
          items[s]['action'](pressed)
        }
      }
      if (typeof buttons !== 'undefined') {
        for (var b = 0; b < buttons.length; b++) {
          if (pressed === buttons[b]['title']) {
            buttons[b]['action'](pressed)
          }
        }
      }
    })
    tvOS.display(temp)
  },

  /**
   * searchView
   *
   * create a nice searchView (with support of objects)
   *
   * @param string search the title of your search field
   * @param string results the subtitle of your results view
   * @param array items the 'returned' items (see example)
   * @param function [callback_on_search] The callback function when searching
   * @param function [callback_on_select] The callback function when clicking on a 'item'
   * @example tvOS.searchView(search, results, items, function (typed) {
   * @example   console.log('Typed: ' + typed)
   * @example }, function (selected) {
   * @example   console.log('Selected: ' + selected)
   * @example })
   */
  searchView: function (search, results, items, callback_on_search, callback_on_select) {
    var temp = ''

    temp += tvOS.SearchView_before.replace('tvOS_search', this.safeString(search))
                                  .replace('tvOS_results', results)

    if (typeof items !== 'object') {
      items = [{
        title: 'Error',
        image: 'https://www.wdgwv.com/logo.png'
      }]
    }

    for (var i = 0; i < items.length; i++) {
      temp += tvOS.SearchView_while.replace('tvOS_title', this.safeString(items[i]['title']))
                                   .replace('tvOS_image', items[i]['image'])
    }

    temp += tvOS.SearchView_after
    //
    // Create DOM node
    temp = tvOS.makeDocument(temp)

    // Get keyboard, it must be easier...
    // Description temp = dom node.
    var textField = temp.childNodes.item(0) // {0: document}
                        .childNodes.item(1) // {0: head, 1:searchTemplate}
                        .childNodes.item(0) // {0: searchField, 1:collectionList}
    //
    // ok we'll finally got the good childnode, now get te Feature 'Keyboard'
    var myKeyboard = textField.getFeature('Keyboard')
    //
    // On text change callback_on_search(myKeyboard.text)
    myKeyboard.onTextChange = function () {
      if (typeof callback_on_search === 'function') {
        callback_on_search(myKeyboard.text)
      } else {
        console.log('Search: ' + myKeyboard.text)
      }
    }
    // But...
    // When someone selects a search result...
    temp.addEventListener('select', function (e) {
      var pressed = e.target.innerHTML
      pressed = pressed.split('<title')[1]
      pressed = pressed.split('/title>')[0]
      pressed = pressed.split('>')[1]
      pressed = pressed.split('<')[0]

      if (typeof callback_on_select === 'function') {
        callback_on_select(pressed)
      }
    })
    //
    // Display!
    tvOS.display(temp)
  },

  /**
   * location
   *
   * go to location
   *
   * @param string url the new location url (full url!)
   * @example tvOS.location(url)
   */
  location: function (url) {
    if (typeof window === 'object') {
      // Used tvOS app with hack.
      this.dismiss()
      setTimeout(function (url) {
        window.location(url)
      }, 1000, url)
    }
  },

  /**
   * toEmoij
   *
   * make a string shine!
   *
   * @param string str the string with :) e.t.c.
   * @example tvOS.toEmoij(str)
   */
  toEmoij: function (str) {
    return str.replace(':)', '\ud83d\ude03')
              .replace(':-)', '\ud83d\ude03')
              .replace(':]', '\ud83d\ude03')
              .replace(':-]', '\ud83d\ude03')
              .replace(':d', '\ud83d\ude00')
              .replace(':-d', '\ud83d\ude00')
              .replace(':D', '\ud83d\ude00')
              .replace(':-D', '\ud83d\ude00')
              .replace('(H)', '\ud83d\ude0e')
              .replace('(h)', '\ud83d\ude0e')
              .replace(':\'(', '\ud83d\ude2d')
              .replace(':\'-(', '\ud83d\ude2d')
              .replace(':(', '\u2639\ufe0f')
              .replace(':-(', '\u2639\ufe0f')
              .replace(':[', '\u2639\ufe0f')
              .replace(':-[', '\u2639\ufe0f')
              .replace(':@', '\ud83d\ude21')
              .replace(':O', '\ud83d\ude2e')
              .replace(':-O', '\ud83d\ude2e')
              .replace(':o', '\ud83d\ude2e')
              .replace(':-o', '\ud83d\ude2e')
              .replace(':/', '\ud83e\udd14')
              .replace(':-/', '\ud83e\udd14')
              .replace(':|', '\ud83d\ude10')
              .replace(':-|', '\ud83d\ude10')
              .replace('xD', '\ud83d\ude35')
              .replace('XD', '\ud83d\ude35')
              .replace('xd', '\ud83d\ude35')
              .replace('xd', '\ud83d\ude35')
              .replace('x-D', '\ud83d\ude35')
              .replace('X-D', '\ud83d\ude35')
              .replace('x-d', '\ud83d\ude35')
              .replace('x-d', '\ud83d\ude35')
              .replace(':-p', '\ud83d\ude1c')
              .replace(':p', '\ud83d\ude1c')
              .replace(':-P', '\ud83d\ude1c')
              .replace(':P', '\ud83d\ude1c')
              .replace(';p', '\ud83d\ude1c')
              .replace(';P', '\ud83d\ude1c')
              .replace(';-p', '\ud83d\ude1c')
              .replace(';-P', '\ud83d\ude1c')
              .replace(':x', '\ud83d\ude36')
              .replace(':X', '\ud83d\ude36')
              .replace(':-x', '\ud83d\ude36')
              .replace(':-X', '\ud83d\ude36')
              .replace(':+1:', '\ud83d\udc4d')
              .replace(':-1:', '\ud83d\udc4e')
              .replace(';)', '\ud83d\ude09')
              .replace(';-)', '\ud83d\ude09')
              .replace(':$', '\u263a\ufe0f')
              .replace(':-$', '\u263a\ufe0f')
              .replace(':s', '\ud83d\ude16')
              .replace(':S', '\ud83d\ude16')
              .replace(':-s', '\ud83d\ude16')
              .replace(':-S', '\ud83d\ude16')
              .replace('<3', '\u2764\ufe0f')
              .replace('(L)', '\u2764\ufe0f')
              .replace('(l)', '\u2764\ufe0f')
              .replace('</3', '\ud83d\udc94')
              .replace('(U)', '\ud83d\udc94')
              .replace('(u)', '\ud83d\udc94')
  },

  /**
   * safeString
   *
   * make a string safe!
   *
   * @param string str the unsafe string
   * @example tvOS.safeString(str)
   */
  safeString: function (str) {
    var entityMap = {
      '&': '&#38;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#x2F;'
    }

    return String(str).replace(/[&<>''\/]/g, function (s) {
      return entityMap[s]
    })
  },

  /**
   * ajax
   *
   * Load a page
   *
   * @param string url the url to load
   * @param string [method] the method you want to use
   * @param function [callback] the callback you want to use.
   * @example tvOS.ajax(url, method, function (data) {
   * @example   console.log(data)
   * @example })
   */
  ajax: function (url, method, callback) {
    if (typeof method === 'undefined') {
      method = 'GET'
    }

    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open(method, url, true)
    xmlhttp.onreadystatechange = function () {
      var status
      if (xmlhttp.readyState === 4) {
        status = xmlhttp.status
        if (status === 200) {
          if (typeof callback === 'undefined') {
            return xmlhttp.responseText
          } else {
            callback(xmlhttp.responseText)
          }
        } else {
          return false
        }
      }
    }
    xmlhttp.send()
  },

  /**
   * _error
   *
   * Please do not use, this is a internal function
   * create a nice error
   *
   * @internal
   * @example tvOS._error()
   */
  _error: function () {
    this.alert('Please read the manual')
  },

  /**
   * translate
   *
   * Check if there is a translation for the string!
   *
   * @param string string the string to translate
   * @return string
   * @example tvOS.translate(string)
   */
  translate: function (string) {
    if (typeof tvOS.strings[string] === 'string') {
      return tvOS.strings[string]
    } else if (tvOS.translations['en'][string] === 'string') {
      return tvOS.translations['en'][string]
    } else {
      return string
    }
  },

  /**
   * parse_str
   *
   * Please do not use, this is a internal function
   * String to array (like PHP's parse_str(...))
   *
   * @internal
   * @param string str the string
   * @param array array the returning array
   * @example tvOS.parse_str(str, array)
   */
  parse_str: function (str, array) {
    // Modified version of https://raw.githubusercontent.com/kvz/phpjs/master/functions/strings/parse_str.js
    // Updated to support 'Unofficial' JavaScript Standard Coding Style
    var strArr = String(str).replace(/^&/, '').replace(/&$/, '').split('&')
    var sal = strArr.length
    var i
    var j
    var ct
    var p
    var lastObj
    var obj
    var undef
    var chr
    var tmp
    var key
    var value
    var postLeftBracketPos
    var keys
    var keysLen
    var fixStr = function (str) {
      return decodeURIComponent(str.replace(/\+/g, '%20'))
    }
    if (!array) {
      array = this.window
    }
    for (i = 0; i < sal; i++) {
      tmp = strArr[i].split('=')
      key = fixStr(tmp[0])
      value = (tmp.length < 2) ? '' : fixStr(tmp[1])

      while (key.charAt(0) === ' ') {
        key = key.slice(1)
      }
      if (key.indexOf('\x00') > -1) {
        key = key.slice(0, key.indexOf('\x00'))
      }
      if (key && key.charAt(0) !== '[') {
        keys = []
        postLeftBracketPos = 0
        for (j = 0; j < key.length; j++) {
          if (key.charAt(j) === '[' && !postLeftBracketPos) {
            postLeftBracketPos = j + 1
          } else if (key.charAt(j) === ']') {
            if (postLeftBracketPos) {
              if (!keys.length) {
                keys.push(key.slice(0, postLeftBracketPos - 1))
              }
              keys.push(key.substr(postLeftBracketPos, j - postLeftBracketPos))
              postLeftBracketPos = 0
              if (key.charAt(j + 1) !== '[') {
                break
              }
            }
          }
        }
        if (!keys.length) {
          keys = [key]
        }
        for (j = 0; j < keys[0].length; j++) {
          chr = keys[0].charAt(j)
          if (chr === ' ' || chr === '.' || chr === '[') {
            keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1)
          }
          if (chr === '[') {
            break
          }
        }

        obj = array

        for (j = 0, keysLen = keys.length; j < keysLen; j++) {
          key = keys[j].replace(/^['"]/, '').replace(/['"]$/, '')
          var lastIter = j !== keys.length - 1
          lastObj = obj
          if (lastIter) { } // Just for error hiding.
          if ((key !== '' && key !== ' ') || j === 0) {
            if (obj[key] === undef) {
              obj[key] = {}
            }
            obj = obj[key]
          } else { // To insert new dimension
            ct = -1
            for (p in obj) {
              if (obj.hasOwnProperty(p)) {
                if (+p > ct && p.match(/^\d+$/g)) {
                  ct = +p
                }
              }
            }
            key = ct + 1
          }
        }
        lastObj[key] = value
      }
    }
  },

  /**
   * loadYoutubeVideo
   *
   * get the mp4 URL of a youtube video
   *
   * @todo Fix possible errors (not allowed to load content?!)
   * @param string videoID the video ID
   * @param function callback Callback
   * @example tvOS.loadYoutubeVideo(videoID, function (video) {
   * @example   console.log('Video url=' + video)
   * @example })
   */
  loadYoutubeVideo: function (videoID, callback) {
    // Use ajax to load video.
    tvOS.ajax('http://www.youtube.com/get_video_info?video_id=' + videoID + '&asv=2', 'GET', function (data) {
      var results = []
      var info = {}

      // Parse the string, and turn it into a array
      tvOS.parse_str(data, info)

      // Get the streams
      var streams = info['url_encoded_fmt_stream_map'].split(',')

      // Loop trough the streams
      var i = 0
      // for (var i = 0; i < streams.length; i++) {
      //
      // real_stream (temporary) array
      var real_stream = {}
      // parse this string into a array
      tvOS.parse_str(streams[i], real_stream)
      // ok, magic
      real_stream['url'] += '&signature=' + real_stream['sig']
      // push it
      results.push(real_stream)
      // }
      // Return the first video url
      if (typeof callback === 'function') {
        callback(results[0]['url'])
      } else {
        console.log('URL=' + results[0]['url'])
        tvOS._error()
      }
    })
  },

  /**
   * login
   *
   * a login form!
   *
   * @param string title title of the login screen
   * @param function callback Callback
   * @param string text button text
   * @param string [image] show a image?
   * @param function [callback_register] register callback action
   * @param string [register] register button text (empty=none)
   * @example tvOS.xx('Please login', function (data) {
   * @example   console.log(data)
   * @example }, 'Login', '', function (register_email) {
   * @example   console.log(register_email)
   * @example }, 'Register') // Example with Register (no image)
   */
  login: function (title, callback, text, image, callback_register, register, needPWD) {
    if (typeof callback === 'function') {
      var buttons = '<button><text>' + text + '</text></button>'

      if (typeof needPWD !== 'boolean') { // Step #1
        buttons = '<button><text>' + text.replace(text, tvOS.translate('next')) + '</text></button>'
      }

      if (typeof callback_register === 'function' && typeof register === 'string') {
        buttons += '<button><text>' + register + '</text></button>'
      }

      var template = tvOS.loginTemplate.replace('tvOS_title', title)
                                       .replace('tvOS_title', title)
                                       .replace('tvOS_image', (typeof image === 'string' && image !== '')
                                                              ? '<img src=\'' + image + '\' />'
                                                              : '')
                                       .replace('tvOS_buttons', buttons)
                                       .replace('tvOS_secure', (typeof needPWD !== 'boolean')
                                                               ? ''
                                                               : 'secure=\'true\' ')

      var ttemp = tvOS.makeDocument(template)
      var ttext = ttemp.getElementById('inputText')
      ttemp.addEventListener('select', function (e) {
        // To human readable...
        var pressed = e.target.innerHTML
        pressed = pressed.split('>')[1]
        pressed = pressed.split('<')[0]

        // Get keyboard text (uh. imput field ;))
        var keyboard = ttext.getFeature('Keyboard')
        var inputText = keyboard.text

        if (pressed === text) {
          // Clicked on the 'login' button!
          callback(tvOS.loginText, inputText)
        } else if (pressed === register) {
          // Clicked on the 'register' button!
          callback_register(inputText)
        } else {
          // Clicked on our 'Next' button!
          tvOS.loginText = inputText
          tvOS.login(title, callback, text, image, callback_register, register, true) // Login? :D
        }
      })

      tvOS.display(ttemp)
    } else {
      this._error('login')
    }
  },

  // * tvOS.loginTemplate
  // *
  // * Template for Login/Passwords
  // *
  // * @var string loginTemplate
  loginTemplate: `<?xml version='1.0' encoding='UTF-8' ?>
  <document>
    <formTemplate>
      <banner>
        tvOS_image<img src='https://www.wdgwv.com/logo.png' />
        <description>
          tvOS_title
        </description>
      </banner>
      <textField tvOS_secureid="inputText">tvOS_title</textField>
      <footer>
         tvOS_buttons
      </footer>
    </formTemplate>
  </document>`,

  // * tvOS.loadingTemplate
  // *
  // * Template for loading screen
  // *
  // * @var string loadingTemplate
  loadingTemplate: `<?xml version='1.0' encoding='UTF-8' ?>
        <document>
          <loadingTemplate theme="light">
            <activityIndicator>
              <text>%s...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`,

  // * tvOS.ListViewTemplate_before
  // *
  // * Template for listView (before)
  // *
  // * @var string ListViewTemplate_before
  ListViewTemplate_before: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <head>
            <style>
              .descriptionLayout {
                tv-text-max-lines: 8;
              }
            </style>
          </head>
          <listTemplate theme="light">
            tvOS_banner
            <list>
              <header>
                <title>tvOS_title</title>
              </header>

              <section>`,

  // * tvOS.ListViewTemplate_while
  // *
  // * Template for listView (while parsing items)
  // *
  // * @var string ListViewTemplate_while
  ListViewTemplate_while: `
                <listItemLockup template="tvOS_template" presentation="tvOS_action" accessibilityText="tvOS_helpText">
                  <title>tvOS_title</title>
                  tvOS_subtitle
                  <relatedContent>
                    <lockup>
                      tvOS_image
                      <title>tvOS_title</title>
                      tvOS_subtitle
                      <description class="descriptionLayout">tvOS_description</description>
                    </lockup>
                  </relatedContent>
                </listItemLockup>`,

  // * tvOS.ListViewTemplate_after
  // *
  // * Template for listView (after)
  // *
  // * @var string ListViewTemplate_after
  ListViewTemplate_after: `
              </section>
            </list>
          </listTemplate>
        </document>`,

  // * tvOS.CompilationView_before
  // *
  // * Template for CompilationView (before)
  // *
  // * @var string CompilationView_before
  CompilationView_before: `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .ordinalLayout {
      margin: 8 0 0 9;
    }
    .whiteButton {
      tv-tint-color: rgb(255, 255, 255);
    }
    </style>
  </head>
  <compilationTemplate theme="light">
    <list>
      <relatedContent>
        <itemBanner>
          <heroImg src="tvOS_image" />
          <row>
            tvOS_buttons
          </row>
        </itemBanner>
      </relatedContent>
      <header>
        <title>tvOS_title</title>
        <subtitle>tvOS_subtitle</subtitle>
        <row>
          <text>tvOS_text</text>
        </row>
      </header>
      <section>
        <header>
          <title> </title>
        </header>`,

  // * tvOS.CompilationView_while
  // *
  // * Template for CompilationView (while)
  // *
  // * @var string CompilationView_while
  CompilationView_while: `
        <listItemLockup>
          <ordinal minLength="2" class="ordinalLayout">tvOS_item</ordinal>
          <title>tvOS_title</title>
          <subtitle>tvOS_subtitle</subtitle>
          <decorationLabel>tvOS_decoration</decorationLabel>
        </listItemLockup>`,

  // * tvOS.CompilationView_after
  // *
  // * Template for CompilationView (after)
  // *
  // * @var string CompilationView_after
  CompilationView_after: `
      </section>
    </list>
  </compilationTemplate>
</document>`,

  // * tvOS.TemplateRatingView
  // *
  // * Template for TemplateRating
  // *
  // * @var string TemplateRatingView
  TemplateRatingView: `<?xml version="1.0" encoding="UTF-8"?>
<document>
  <ratingTemplate theme="light">
      <title>tvOS_title</title>
      <ratingBadge value="tvOS_rating"></ratingBadge>
  </ratingTemplate>
</document>`,

  // * tvOS.SearchView_before
  // *
  // * Template for SearchView (before)
  // *
  // * @var string SearchView_before
  SearchView_before: `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
        .suggestionListLayout {
          margin: -150 0;
        }
      </style>
    </head>
    <searchTemplate>
      <searchField>tvOS_search</searchField>
      <collectionList>
        <shelf>
          <header>
            <title>tvOS_results</title>
          </header>
        <section>`,

  // * tvOS.SearchView_while
  // *
  // * Template for SearchView (while)
  // *
  // * @var string SearchView_while
  SearchView_while: `
            <lockup>
              <img src="tvOS_image" width="350" height="520" />
              <title>tvOS_title</title>
            </lockup>`,

  // * tvOS.SearchView_after
  // *
  // * Template for SearchView (after)
  // *
  // * @var string SearchView_after
  SearchView_after: `          </section>
        </shelf>
      </collectionList>
    </searchTemplate>
  </document>`
}

// * tvOS.strings
// *
// * tvOS.js load translations
// *
// * @var object strings
if (typeof tvOS.translations[tvOS.lang] === 'object') {
  tvOS.strings = tvOS.translations[tvOS.lang]
} else {
  tvOS.strings = tvOS.translations['en']
}

// * Loaded
// *
// * tvOS.js Loaded
// *
// * @var object js
// * @example tvOS.js v0.0.5 stable (nl)
console.log('tvOS.js v' + tvOS.js.version + ' ' + tvOS.js.release + '(' + tvOS.lang + ')')

/*
 * App.onError
 *
 * App.onError Log & Reload.
 */
App.onError = function (error) {
  console.log(error)
  App.reload()
}

// END OF tvOS.js
