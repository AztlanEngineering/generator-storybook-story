import React from 'react'

//import { action } from '@storybook/addon-actions'

import { <%= name %> } from 'ui'

export default {
	title: '<%= fullname %>',
	component:<%= name %>,
	parameters: {
		decorators: [ 
			//sotryfn => <div className="">{ storyfn }</div>,
		]
	}
}

export const Default = () => 
	<<%= name %>></<%= name %>> 

export const Variant = () => 
		<<%= name %>></<%= name %>> 

/*Variant.story = {
		name: 'Variant',
}*/

		/*
    onClick={action('clicked')}
		*/
