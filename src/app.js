import ng from 'angular';

import '../src/assets/style/reset.css';
import '../src/assets/style/index.less';

import 'font-awesome/less/font-awesome.less';
import 'animate.css/animate.css';


import uiRouter from 'angular-ui-router';
import components from './components';
import services from './services';


ng.module('app', [components, services, uiRouter])
  .config(($locationProvider, $stateProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
    const states = [
      {
        name: 'home',
        url: '/',
        component: 'pictureList',
        data: {
          pageType: 'home'
        }
      },
      {
        name: 'albums',
        url: '/albums',
        component: 'albums'
      },
      {
        name: 'album',
        url: '/albums/:id/photo',
        component: 'pictureList',
        data: {
          pageType: 'albums'
        }
      },
      {
        name: 'picture',
        url: '/photos/:id',
        component: 'picture'
      }
    ];
    states.forEach(state => $stateProvider.state(state));
  });
