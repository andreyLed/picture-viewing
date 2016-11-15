import ng from 'angular';
import picturesService from './picturesService';

export default ng.module('app.service', [])
.service('picturesService', picturesService)
.name;
