import React from 'react';

const Content: React.FC = () => {
	return <div className="w-full max-w-lg p-4">
    <div className="flex flex-row items-center pb-10 mt-4 justify-between p-2">
			<div>
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="/assets/me.jpg" alt="Bonnie image"/>
			</div>
			<div className="flex flex-col">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Aung Koko Lwin</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</span>
        <span className="text-xs text-gray-700 dark:text-gray-400">
					<a href="https://marcoexexx-portfolio.vercel.app/" className="underline" target="_blank">portfolio</a>
				</span>
			</div>
    </div>
		
		<div className="dark:text-white pb-10">
			<p className="text-lg font-bold mb-2 hover:underline hover:decoration-4 hover:decoration-gray-700">About</p>
			<p className="text-md dark:text-gray-400">
				Hey! I'm <a href="http://instagram.com/_u/marco.exexx" className="hover:underline" target="_blank">Aung Koko Lwin</a>. I enjoy building dynamic, creative products from start to finish. Focused on developing intuitive experiences that constantly grow and improve based on user metrics. Always shipping.
			</p>
		</div>
		
		<div className="dark:text-white mb-10">
			<p className="text-lg font-bold mb-2 hover:underline hover:decoration-4 hover:decoration-gray-700">Bio</p>
			<table className="table-auto">
				<tbody>
					<tr className="flex items-start">
						<td className="font-bold">2003</td>
						<td className="px-10">Born in Yangon, Myanmar.</td>
					</tr>
					<tr className="flex items-start">
						<td className="font-bold">2020</td>
						<td className="px-10">
							finished matriculation.
						</td>
					</tr>
					<tr className="flex items-start">
						<td className="font-bold">2022 to present</td>
						<td className="px-10">Working as a freelancer.</td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<div className="dark:text-white mb-10">
			<p className="text-lg font-bold mb-2 hover:underline hover:decoration-4 hover:decoration-gray-700">| 💛</p>
			<div className="flex flex-wrap gap-2">
				<p className="text-md dark:text-gray-400">
					Art, Music, Drawing, Machine Learning
				</p>
			</div>
		</div>
		
		<div className="dark:text-white mb-10">
			<p className="text-lg font-bold mb-2 hover:underline hover:decoration-4 hover:decoration-gray-700">Links</p>
      <div className='flex flex-col gap-[4px]'>
        <div className="flex flex-col text-sm mb-1">
          <p className="font-medium text-md dark:text-gray-400 cursor-default">Github</p>
          <a href="https://github.com/alk-neq-me" target="_blank">@alk-neq-me</a>
        </div>
        <div className="flex flex-col mb-1 text-sm">
          <p className="font-medium dark:text-gray-400 cursor-default">Instagram</p>
          <a href="https://www.instagram.com/marco.exexx/" target="_blank">@marco.exexx</a>
        </div>
        <div className="flex flex-col text-sm">
          <p className="font-medium dark:text-gray-400 cursor-default">Facebook</p>
          <a href="https://facebook.com/marco.exexx" target="_blank">@marco.exexx</a>
        </div>
      </div>
		</div>
	</div>
}


export default Content;
