import angular from 'angular'

import WelcomeController from './welcome.controller'

export default
  angular
    .module('build-tooling.welcome', [])
    .controller('WelcomeController', WelcomeController)
    .name
