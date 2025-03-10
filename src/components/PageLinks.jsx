import { pageLinks } from '../data.js';
import PageLink from './PageLink.jsx';

function PageLinks({ parentClass, itemClass }) {
	return (
		<ul className={parentClass} id="nav-links">
			{pageLinks.map((link) => {
				return <PageLink key={link.id} link={link} itemClass={itemClass} />;
			})}
		</ul>
	);
}

export default PageLinks;
