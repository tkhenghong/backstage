import {CatalogBuilder} from '@backstage/plugin-catalog-backend';
import {ScaffolderEntitiesProcessor} from '@backstage/plugin-scaffolder-backend';
import {Router} from 'express';
import {PluginEnvironment} from '../types';

import {GithubOrgEntityProvider} from '@backstage/plugin-catalog-backend-module-github';


export default async function createPlugin(
    env: PluginEnvironment,
): Promise<Router> {
    const builder = await CatalogBuilder.create(env);

    // The org URL below needs to match a configured integrations.github entry
    // specified in your app-config.
    builder.addEntityProvider(
        GithubOrgEntityProvider.fromConfig(env.config, {
            id: 'development',
            // orgUrl: 'https://github.maybank.com/github-apps/backstage-dev',
            orgUrl: 'https://github.com/TKH-Maybank-Organization',
            logger: env.logger,
            schedule: env.scheduler.createScheduledTaskRunner({
                frequency: {minutes: 60},
                timeout: {minutes: 15},
            }),
        }),
    );

    builder.addProcessor(new ScaffolderEntitiesProcessor());
    const {processingEngine, router} = await builder.build();
    await processingEngine.start();
    return router;
}
