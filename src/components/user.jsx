import React from 'react';
import Image from '../assets/imagem curriculo.png';
import {
	EnvelopeSimple,
	FileArrowDown,
	GithubLogo,
	LinkedinLogo,
	WhatsappLogo,
} from '@phosphor-icons/react';

const User = () => {
	return (
		<section className="card pt-0 pb-[40px] px-[40px] flex flex-col items-center gap-y-[12px]">
			<picture className="w-[200px] h-[200px] rounded-xl mt-[-80px]">
				<img
					className="shadow_img w-full h-full rounded-full"
					src={Image}
					alt="Foto perfil"
				/>
			</picture>
			<div className="flex flex-col items-center gap-y-2">
				<h1 className="text-[32px] font-semibold">Matheus Mourão</h1>
				<p className="text-[18px] font-light">Desenvolvedor Front-end</p>

				<div className="flex gap-x-3 mt-6">
					<a
						href="https://www.linkedin.com/in/matheus-mour%C3%A3o-13a838208/"
						rel="noreferrer"
						target="_blank"
						className="w-[46px] h-[46px] button rounded-md"
					>
						<LinkedinLogo size={22} weight="fill" />
					</a>
					<a
						href="https://github.com/Matheus-TC-Mourao"
						rel="noreferrer"
						target="_blank"
						className="w-[46px] h-[46px] button rounded-md"
					>
						<GithubLogo size={22} weight="fill" />
					</a>
					<a
						href="mailto:matheusmouraotc@gmail.com"
						rel="noreferrer"
						target="_blank"
						className="w-[46px] h-[46px] button rounded-md"
					>
						<EnvelopeSimple size={22} weight="duotone" />
					</a>
					<a
						href="https://wa.me/5599999702376"
						rel="noreferrer"
						target="_blank"
						className="w-[46px] h-[46px] button rounded-md"
					>
						<WhatsappLogo size={22} />
					</a>
				</div>

				<a href="" target="_blank" className="mt-6 buttonCV gap-x-2 px-2">
					<FileArrowDown className="svg" size={32} weight="fill" />

					<span>Download CV</span>
				</a>
			</div>
		</section>
	);
};

export default User;
