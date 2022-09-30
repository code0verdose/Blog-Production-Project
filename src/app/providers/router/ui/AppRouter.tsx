import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';
import {t} from 'i18next';

const AppRouter = () => {
	return (
		<Suspense fallback={<div>{t('Загрузка...')}</div>}>
			<Routes>
				{Object.values(routeConfig).map(({element, path}) => (
					<Route
						key={path}
						path={path}
						element={(
							<div className='page-wrapper'>
								{element}
							</div>
						)}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;