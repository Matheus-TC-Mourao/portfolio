import React from 'react';
import ImgEcommerce from '../assets/Imgecommerce.png';
import ImgWeatherApp from '../assets/weatherApp.png';
import { Swiper, SwiperSlide } from 'swiper/react';

const Projects = () => {
	return (
		<section className="card col-span-3 px-10 py-8">
			<h2 className="text-[28px] subtitle font-semibold">Projetos</h2>

			<div className="project_content">
				{/* Projeto 1 */}
				<div className="flex flex-col items-center gap-y-3 w-full rounded-md pb-3 border border-body overflow-hidden group">
					<picture className="w-full h-[250px] overflow-hidden relative">
						<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
						<img
							className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
							src={ImgEcommerce}
							alt="Imagem Ecommerce Shop"
						/>
						<div className="absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-300 z-50">
							<div className="flex gap-2 flex-wrap py-0 px-2 mt-auto">
								<span className="tag">JavaScript</span>
								<span className="tag">ReactJs</span>
								<span className="tag">Tailwind CSS</span>
								<span className="tag">API</span>
							</div>
						</div>
					</picture>

					<strong className="font-semibold text-[16px] text-secondary py-0 px-[18px] text-center">
						Ecommerce Shop
					</strong>
				</div>

				{/* Projeto 2 */}
				<div className="flex flex-col items-center gap-y-3 w-full rounded-md pb-3 border border-body overflow-hidden group">
					<picture className="w-full h-[250px] overflow-hidden relative">
						<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
						<img
							className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
							src={ImgWeatherApp}
							alt="Imagem Ecommerce Shop"
						/>
						<div className="absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-300 z-50">
							<div className="flex gap-2 flex-wrap py-0 px-2 mt-auto">
								<span className="tag">JavaScript</span>
								<span className="tag">ReactJs</span>
								<span className="tag">Tailwind CSS</span>
								<span className="tag">API OneWeatherMap</span>
							</div>
						</div>
					</picture>

					<strong className="font-semibold text-[16px] text-secondary py-0 px-[18px] text-center">
						Weather App
					</strong>
				</div>
			</div>
		</section>
	);
};

export default Projects;
