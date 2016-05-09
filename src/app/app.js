import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import ngRoute from 'angular-route'
import ngSanitize from 'angular-sanitize'

import btWelcome from './welcome/welcome.module'

import './app.css'

export default
  angular
    .module('build-tooling', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      ngRoute,
      ngSanitize,

      btWelcome
    ])
    .name
