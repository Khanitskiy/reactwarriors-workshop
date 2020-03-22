import React from "react"

class MoviePaginate extends React.Component {
  render() {

    const {total_pages, current_page, changePage} = this.props;
    const changePageAction = ( type) => {
      if (getClassLink(type) !== type) {
        return () => {
          changePage((type == 'prev' ? current_page-1 : current_page+1));
        }
      } else {
        return () => { return false }
      }
    }

    const getClassLink = (type) => {
      if (type == 'prev') {
        return (current_page - 1) == 0 ? type : `nav-link`
      } else {
        return (current_page + 1) > total_pages ? type : `nav-link`
      }
    }
    return (
        <div>
          <ul className="tabs nav nav-pills">
            <li className="nav-item">
              <div
                  className={getClassLink('prev')}
                  onClick={changePageAction('prev')}
                  style={{display: 'block', padding: '.5rem 1rem'}}
              >
                &lt;&lt;
              </div>
            </li>
            <li className="nav-item"><div style={{display: 'block', padding: '.5rem 1rem'}} >Current page: {current_page} in {total_pages}</div></li>
            <li className="nav-item">
              <div
                  className={getClassLink('next')}
                  onClick={changePageAction('next')}
                  style={{display: 'block', padding: '.5rem 1rem'}}
              >
                  >>
              </div>
            </li>
          </ul>
        </div>
    )
  }
}

export default MoviePaginate;