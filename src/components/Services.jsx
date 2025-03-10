import Title from './Title.jsx';
import { services } from '../data.js';
import Service from './Service.jsx';

const Services = () => {
	return (
		<section className="section services" id="services">
			<div className="section-title">
				<Title title="our" subTitle="services" />
			</div>

			<div className="section-center services-center">
				{services.map((service) => {
					return <Service key={service.id} {...service} />;
				})}
			</div>
		</section>
	);
};

export default Services;
