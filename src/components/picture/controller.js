export default class pictureController {
  constructor($stateParams, picturesService) {
    'ngInject';
    this.picturesService = picturesService;
    this.id = $stateParams.id;
  }

  $onInit() {
    this.picturesService.detail(this.id).then((data) => {
      this.pictureData = data;
    });
  }
}
