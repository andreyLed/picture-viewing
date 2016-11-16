export default class PictureListController {
  constructor($state, $stateParams, picturesService) {
    'ngInject';
    this.picturesService = picturesService;
    this.type = $state.current.data.pageType;
    this.id = $stateParams.id;
    this.isScrolleDisable = true;
  }
  $onInit() {
    if (this.type === 'home') {
      this.picturesService.list().then((data) => {
        this.data = data;
        this.pictures = data.splice(0, 15);
        this.pageTitle = 'All pictures';
        this.isScrolleDisable = false;
      });
    } else {
      this.picturesService.album(this.id).then((data) => {
        this.data = data;
        this.pictures = data.splice(0, 15);
        this.pageTitle = `Picture Album № ${this.pictures[0].albumId}`;
        this.isScrolleDisable = false;
      });
    }
  }

  addMorePictures() {
    const nerArr = this.data.splice(0, 15);
    this.pictures.push(...nerArr);
  }

}
