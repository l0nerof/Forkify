import View from './View.js';

class SearchView extends View {
  _parentElSearch = document.querySelector('.search');

  getQuery() {
    const query = this._parentElSearch.querySelector('.search__field').value;
    if (!query) {
      document.querySelector('.pagination__btn--prev').style.display = 'none';
      document.querySelector('.pagination__btn--next').style.display = 'none';

      this.renderError();
    }

    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElSearch.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElSearch.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
