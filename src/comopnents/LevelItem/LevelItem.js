import React from 'react';
import keys from 'lodash/keys';
import PropTypes from 'prop-types';
import TagItem from '../TagItem';

const levelName = ['noob', 'easy', 'normal', 'hard', 'challenge'];

const LevelItem = ({
  onClick, name, difficulty,
  solved, stageName, tags,
}) => {
  const classList = {
    'level-item': true,
    [`level-item-${stageName}`]: true,
    solved,
  };
  const levelClass = keys(classList).filter(e => classList[e]).join` `;
  return (
    <div
      className={levelClass}
      onClick={onClick}
    >
      <div className="level-item-title">
        {name}
      </div>
      <div className="level-item-tags">
        <TagItem>
          {levelName[difficulty]}
        </TagItem>
        {
          tags.map(tag => (
            <TagItem>
              {tag}
            </TagItem>
          ))
        }
      </div>
    </div>
  );
};

LevelItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  stageName: PropTypes.string.isRequired,
  solved: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default LevelItem;
