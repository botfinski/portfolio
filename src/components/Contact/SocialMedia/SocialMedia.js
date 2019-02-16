import React from 'react';
import './SocialMedia.css';

const socialMedia = () => (
	<ul className='social_media'>
		<li className='social_media__item'>
			<a className='social_media__item_link social_media__item_link--facebook' href='https://www.facebook.com/'>Facebook</a>
		</li>
		<li className='social_media__item'>
			<a className='social_media__item_link social_media__item_link--behance' href='https://www.behance.net'>Behance</a>
		</li>
		<li className='social_media__item'>
			<a className='social_media__item_link social_media__item_link--linkedin' href='https://pl.linkedin.com'>Linkedin</a>
		</li>
	</ul>
)

export default socialMedia;
