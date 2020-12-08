/// <reference types="node" />

import { FastifyPluginCallback } from 'fastify';

declare namespace fastifyShare {

    interface Singleton {
        [k: string]: unknown
    }

    interface Factory {
        [k: string]: unknown
    }

    interface Model {
        [k: string]: unknown
    }

    interface Service {
        [k: string]: unknown
    }

    interface Util {
        [k: string]: unknown
    }
}

declare module 'fastify' {
    interface FastifyInstance {
        singleton: fastifyShare.Singleton;
        factory: fastifyShare.Factory
        model: fastifyShare.Model;
        service: fastifyShare.Service;
        util: fastifyShare.Util;
    }
}

declare const fastifyShare: FastifyPluginCallback<{}>;
export = fastifyShare;