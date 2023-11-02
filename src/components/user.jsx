import React from 'react';
import Image from '../assets/imagem curriculo.png';

const User = () => {
	return (
		<section className="section card pt-0 px-[40px] flex flex-col items-center gap-y-[12px]">
			<picture className="w-[200px] h-[200px] rounded-xl mt-[-100px]">
				<img
					className="shadow_img w-full h-full rounded-full"
					src={Image}
					alt="Foto perfil"
				/>
			</picture>
			<div className="flex flex-col items-center gap-y-2">
				<h1 className="text-[32px] font-semibold">Matheus Mourão</h1>
				<p className="text-[18px] font-light">Desenvolvedor Fron-end</p>
			</div>
		</section>
	);
};

export default User;
