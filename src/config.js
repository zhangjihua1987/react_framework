const ENV = 'dev'; // 'prod' 'test' 'dev'

const clientId = 'VsnuYR11Djt4SStFc0VfLPXxx4';
const protocol = window.location.protocol;
const windowHost = window.location.host;
const apiVersion = 'v1';

const common = {
    clientId: clientId,
    protocol: protocol,
    windowHost: windowHost,
    loginUrl: `http://oauth.newayz.com/show?response_type=code&state=wayz&client_id=${clientId}&redirect_uri=${protocol}//${windowHost}/login`,
    apiVersion: apiVersion,
};

const config = {
    dev: {
        env: 'dev',
        host: 'http://zhangjihua-server.alpha.muchbo.com',
        // host: 'http://192.168.50.158:8010',
        // http://zhangjihua-server.alpha.muchbo.com/v1/auth/login
        // host: 'http://yiyuhao-payserver.alpha.muchbo.com'
    },
    test: {
        env: 'test'
    },
    prod: {
        env: 'prod'
    }
};

export default {
    ...common,
    ...config[ENV]
}