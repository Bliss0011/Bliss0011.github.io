angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.videos', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/videos.html',
        controller: 'videosCtrl'
      }
    }
  })

  .state('tabsController.hardbass', {
    url: '/Hardbass',
    views: {
      'tab1': {
        templateUrl: 'templates/hardbass.html',
        controller: 'hardbassCtrl'
      }
    }
  })

  .state('tabsController.gallery', {
    url: '/Gallery',
    views: {
      'tab3': {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('tabsController.russia', {
    url: '/Russia',
    views: {
      'tab1': {
        templateUrl: 'templates/russia.html',
        controller: 'russiaCtrl'
      }
    }
  })

  .state('tabsController.meme', {
    url: '/meme',
    views: {
      'tab1': {
        templateUrl: 'templates/meme.html',
        controller: 'memeCtrl'
      }
    }
  })

  .state('tabsController.japan', {
    url: '/Japan',
    views: {
      'tab1': {
        templateUrl: 'templates/japan.html',
        controller: 'japanCtrl'
      }
    }
  })

  .state('tabsController.initialD', {
    url: '/Initial D',
    views: {
      'tab1': {
        templateUrl: 'templates/initialD.html',
        controller: 'initialDCtrl'
      }
    }
  })

  .state('tabsController.america', {
    url: '/America',
    views: {
      'tab1': {
        templateUrl: 'templates/america.html',
        controller: 'americaCtrl'
      }
    }
  })

  .state('tabsController.trump', {
    url: '/Trump',
    views: {
      'tab1': {
        templateUrl: 'templates/trump.html',
        controller: 'trumpCtrl'
      }
    }
  })

  .state('tabsController.music', {
    url: '/Music',
    views: {
      'tab2': {
        templateUrl: 'templates/music.html',
        controller: 'musicCtrl'
      }
    }
  })

  .state('tabsController.memeMusic', {
    url: '/meme music',
    views: {
      'tab2': {
        templateUrl: 'templates/memeMusic.html',
        controller: 'memeMusicCtrl'
      }
    }
  })

  .state('tabsController.7thElement', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/7thElement.html',
        controller: '7thElementCtrl'
      }
    }
  })

  .state('rushCompliation', {
    url: '/page17',
    templateUrl: 'templates/rushCompliation.html',
    controller: 'rushCompliationCtrl'
  })

  .state('tabsController.actualMusicChannels', {
    url: '/page18',
    views: {
      'tab2': {
        templateUrl: 'templates/actualMusicChannels.html',
        controller: 'actualMusicChannelsCtrl'
      }
    }
  })

  .state('tabsController.gaming', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/gaming.html',
        controller: 'gamingCtrl'
      }
    }
  })

  .state('tabsController.darudeSandstorm', {
    url: '/darude sandstorm',
    views: {
      'tab2': {
        templateUrl: 'templates/darudeSandstorm.html',
        controller: 'darudeSandstormCtrl'
      }
    }
  })

  .state('tabsController.chineseMemes', {
    url: '/chinese',
    views: {
      'tab1': {
        templateUrl: 'templates/chineseMemes.html',
        controller: 'chineseMemesCtrl'
      }
    }
  })

  .state('tabsController.page22', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/page22.html',
        controller: 'page22Ctrl'
      }
    }
  })

  .state('tabsController.wintergatan', {
    url: '/wintergatan',
    views: {
      'tab2': {
        templateUrl: 'templates/wintergatan.html',
        controller: 'wintergatanCtrl'
      }
    }
  })

  .state('tabsController.hyperPotions', {
    url: '/page24',
    views: {
      'tab2': {
        templateUrl: 'templates/hyperPotions.html',
        controller: 'hyperPotionsCtrl'
      }
    }
  })

  .state('gachi', {
    url: '/page21',
    templateUrl: 'templates/gachi.html',
    controller: 'gachiCtrl'
  })

  .state('tabsController.page25', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/page25.html',
        controller: 'page25Ctrl'
      }
    }
  })

  .state('tabsController.8848', {
    url: '/page26',
    views: {
      'tab1': {
        templateUrl: 'templates/8848.html',
        controller: '8848Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')


});