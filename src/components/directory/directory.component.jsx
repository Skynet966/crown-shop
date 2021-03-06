import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.sass';

import { selectSections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const Directory = ({ sections }) => (
	<div className='directory-menu'>
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectSections
});

export default connect(mapStateToProps)(Directory);
