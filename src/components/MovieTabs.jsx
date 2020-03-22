import React from "react"

const classNames = require('classnames');

class MovieTabs extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const {sort_by, updateSortBy} = this.props;
    const handleClick = value => {
      return () => {
        updateSortBy(value);
      }
    }

    const getClassLink = (value) => {
      var navClass = classNames({
        'nav-link': true,
        'active'  : sort_by === value
      })

      return navClass
    }
    return (
        <ul className="tabs nav nav-pills">
          <li className="nav-item">
            <div
                className={getClassLink('popularity.desc')}
                onClick={handleClick('popularity.desc')}
            >
              Popularity desc
            </div>
          </li>
          <li className="nav-item">
            <div
                className={getClassLink('revenue.desc')}
                onClick={handleClick('revenue.desc')}
            >
              Revenue desc
            </div>
          </li>
          <li className="nav-item">
            <div
                className={getClassLink('vote_average.desc')}
                onClick={handleClick('vote_average.desc')}
            >
              Vote avarage desc
            </div>
          </li>
        </ul>
    )
  }
}

export default MovieTabs;